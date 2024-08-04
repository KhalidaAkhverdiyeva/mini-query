import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import ImageUploader from './ImageUploader';
import useUpdateUser from '../../hooks/useUpdateUser';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditUserModal = ({ isOpen, onClose, user }) => {
    const { mutate: updateUser } = useUpdateUser();

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            email: '',
            company: '',
            role: '',
            status: '',
            file: '' 
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            phoneNumber: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            company: Yup.string().required('Required'),
            role: Yup.string().required('Required'),
            status: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            const updatedData = { 
                name: values.name,
                phoneNumber: values.phoneNumber,
                email: values.email,
                company: values.company,
                role: values.role,
                status: values.status,
               
            };

            updateUser({ userId: user.id, updatedData }, {
                onSuccess: () => {
                    onClose();
                },
                onError: (error) => {
                    console.error('Failed to update user:', error);
                }
            });
        }
    });

    useEffect(() => {
        if (user) {
            formik.setValues({
                name: user.name || '',
                phoneNumber: user.phoneNumber || '',
                email: user.email || '',
                company: user.company || '',
                role: user.role || '',
                status: user.status || '',
                file: '' 
            });
        }
    }, [user, formik]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50" style={{ margin: '0px' }}>
            <div className="bg-white w-[740px] rounded-lg shadow-lg overflow-hidden flex flex-col">
                <button
                    onClick={onClose}
                    className="flex justify-end pt-[10px] pr-[10px] text-gray-500 hover:text-black"
                >
                    <IoClose className="text-2xl" />
                </button>

                <div className='flex mb-[20px]'>
                    <div className="w-[40%] p-4 flex flex-col items-center">
                        <ImageUploader 
                            name="file"
                            value={formik.values.file}
                           
                        />
                    </div>
                    <div className="w-[60%] p-4">
                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
                            />
                            
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
                            />
                            
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
                            />
                            
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={formik.values.company}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
                            />
                            
                            <input
                                type="text"
                                name="role"
                                placeholder="Role"
                                value={formik.values.role}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
                            />
                            
                            <select
                                name="status"
                                value={formik.values.status}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
                            >
                                <option value="" disabled>Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Pending">Pending</option>
                                <option value="Banned">Banned</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                            <button
                                type="submit"
                                className="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-gray-800"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserModal;
