import React, {useState, useEffect} from 'react'
import { IoClose } from 'react-icons/io5';
import ImageUploader from './ImageUploader';

const UpdateModal = ({ isOpen, onClose, user, onUpdate }) => {
    
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        company: '',
        role: '',
        status: '',
        file: user?.image || '' 
      });
    
      useEffect(() => {
        if (user) {
          setFormData({
            name: user.name || '',
            phoneNumber: user.phoneNumber || '',
            email: user.email || '',
            company: user.company || '',
            role: user.role || '',
            status: user.status || '',
            file: user.image || ''

          });
        }
      }, [user]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setFormData({
              ...formData,
              file: reader.result
            });
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ ...user, ...formData });
        onClose(); 
      };
      if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white w-[740px] rounded-lg shadow-lg overflow-hidden flex flex-col">
      <button
        
        className="flex justify-end pt-[10px] pr-[10px] text-gray-500 hover:text-black"
      >
        <IoClose onClick={onClose} className="text-2xl" />
      </button>

      <div className='flex'>
      <div className="w-[40%] p-4 flex flex-col items-center">
            <ImageUploader
            name="file"
            onChange={handleFileChange}
            value={formData.file}
            />
        </div>
        <div className="w-[60%] p-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              
              className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
            />
            
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            
              className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
            />
         
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
           
              className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
            />
         
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
        
              className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
            />
   
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
   
              className="p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]"
            />
         
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
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
 
  )
}

export default UpdateModal