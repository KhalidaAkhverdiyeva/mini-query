import React from 'react';
import { IoClose } from 'react-icons/io5';
import ImageUploader from './ImageUploader';
import useAddUser from '../../hooks/useAddUser';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddUserModal = ({ isOpen, onClose, refetchUsers }) => {
  const { mutate: addUser, isLoading, error } = useAddUser();

  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      company: '',
      role: '',
      status: 'Active',
      file: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name field can not be empty!'),
      phoneNumber: Yup.string().required('Number field can not be empty!'),
      email: Yup.string().email('Invalid email address').required('Invalid email address!'),
      company: Yup.string().required('Company field can not be empty!'),
      role: Yup.string().required('Role field can not be empty!'),
      status: Yup.string().required('Required'),
      file: Yup.mixed().required('Required'),
    }),
    onSubmit: (values) => {
      const data = { ...values };
      addUser(data, {
        onSuccess: () => {
          refetchUsers();
          formik.resetForm();
          onClose();
        },
        onError: (error) => {
          console.error('Error adding user:', error);
        },
      });
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue('file', reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      formik.setFieldValue('file', null); 
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
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
             onChange={handleFileChange}
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
              {formik.touched.name && formik.errors.name ? (
                <p className=" text-red-500 text-[12px]" style={{ marginTop: '0px' }}>{formik.errors.name}</p>
                ) : null}
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <p className=" text-red-500 text-[12px] " style={{ marginTop: '0px' }}>{formik.errors.phoneNumber}</p>
                ) : null}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className=" text-red-500 text-[12px]" style={{ marginTop: '0px' }}>{formik.errors.email}</p>
                ) : null}
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
              />
              {formik.touched.company && formik.errors.company ? (
                <p className=" text-red-500 text-[12px]" style={{ marginTop: '0px' }}>{formik.errors.company}</p>
                ) : null}
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
              />
              {formik.touched.role && formik.errors.role ? (
                <p className=" text-red-500 text-[12px]" style={{ marginTop: '0px' }}>{formik.errors.role}</p>
                ) : null}
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

export default AddUserModal;
