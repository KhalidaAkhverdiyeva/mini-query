import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import ImageUploader from './ImageUploader';
import useAddUser from '../../hooks/useAddUser'


const AddUserModal = ({ isOpen, onClose, refetchUsers }) => {
const { mutate: addUser, isLoading, error } = useAddUser();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    company: '',
    role: '',
    status: 'Active',
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData, {
        onSuccess: () => {
          refetchUsers(); 
          setFormData({
            name: '',
            phoneNumber: '',
            email: '',
            company: '',
            role: '',
            status: 'Active',
          });
          onClose();
        },
        onError: (error) => {
          console.error('Error adding user:', error);
        }
      });
    onClose() 
   
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div
      className="bg-white w-[740px] rounded-lg shadow-lg overflow-hidden flex flex-col "
    >
      <button
        onClick={onClose}
        className=" flex justify-end pt-[10px] pr-[10px] text-gray-500 hover:text-black"
      >
        <IoClose className="text-2xl" />
      </button>


      <div className='flex mb-[20px]'>
      <div className="w-[40%] p-4 flex flex-col items-center ">
        <ImageUploader/>
      </div>
      <div className="w-[60%] p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
            className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleInputChange}
            className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
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
