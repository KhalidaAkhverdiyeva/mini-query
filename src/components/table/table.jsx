import React, { useState, useEffect } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { IoMdArrowUp } from "react-icons/io";
import { FaPen } from "react-icons/fa6";
import RowsPerPageSelector from './RowsPerPageSelector';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import useFetchedUsers from '../../services/userApiService';





const Table = () => {
  const [showOptions, setShowOptions] = useState(null);
  const { data, error, isLoading } = useFetchedUsers();
 
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleOptionsClick = (index) => {
    setShowOptions(index === showOptions ? null : index);
  };

  return (
    <div className="">
    <table className="min-w-full bg-white">
      <thead className="bg-[#F4F6F8] text-[#6B7A88]">
        <tr>
          <th className="p-4 font-[600] text-[14px] text-left">
            <input type="checkbox" className="form-checkbox h-[20px] w-[20px] border-gray-300 rounded-md checked:bg-green-600 checked:border-green-600 checked:accent-white" />
          </th>
          <th className="p-4 font-[600] text-[14px] text-left flex items-center gap-2">Name <IoMdArrowUp /></th>
          <th className="p-4 font-[600] text-[14px] text-left">Phone number</th>
          <th className="p-4 font-[600] text-[14px] text-left">Company</th>
          <th className="p-4 font-[600] text-[14px] text-left">Role</th>
          <th className="p-4 font-[600] text-[14px] text-left">Status</th>
          <th className="p-4 font-[600] text-[14px] text-left"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => {
          return <tr className="border-b border-dashed border-gray-200 text-[14px] hover:bg-[#F4F6F8]">
          <td className="p-4">
            <input type="checkbox" className="form-checkbox h-[20px] w-[20px] border-gray-300 rounded-sm checked:bg-green-600 checked:border-green-600 checked:accent-white" />
          </td>
          <td className="p-4">
            <div className="flex items-center">
              <img
                src={user.avatar}
                alt="Angelique Morse"
                className="rounded-full mr-4 w-[40px] h-[40px]"
              />
              <div>
                <div className="font-medium text-[#1C252E]">{user.name}</div>
                <div className="text-[#A2AEB8] font-[500]">{user.email}</div>
              </div>
            </div>
          </td>
          <td className="p-4 text-[#1C252E] whitespace-nowrap">{user.phoneNumber}</td>
          <td className="p-4 text-[#1C252E] whitespace-nowrap">{user.company}</td>
          <td className="p-4 text-[#1C252E] whitespace-nowrap">{user.role}</td>
          <td className="p-4 text-[#1C252E]">
            <span className="inline-block px-[6px] py-[3px] text-[12px] font-[700] rounded-md text-[#B71D18] bg-[#F7DDD8]">
              {user.status}
            </span>
          </td>
          <td className="p-4 pt-[30px] flex items-center justify-end space-x-4">
            <FaPen className='text-[17px] text-[#637381] align-middle' />
            <div className="relative">
              <FaEllipsisV
                className="text-gray-500 cursor-pointer align-middle"
                onClick={() => handleOptionsClick(0)}
              />
              {showOptions === 0 && (
                <div className="absolute right-0 w-40 mt-2 bg-white border rounded shadow-lg">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                  </ul>
                </div>
              )}
            </div>
          </td>
          </tr>
           
        })}
      </tbody>
    </table>
    <div className='relative flex gap-3 items-center justify-end text-left z-40 py-[15px] px-[20px]'>
    <RowsPerPageSelector/>
    <div className='text-[#1C252E] text-[14px]'> 1–5 of 20</div>
    <div className='flex '>
      <HiOutlineChevronLeft />
      <HiOutlineChevronRight />
    </div>
    </div>
    
  </div>
  
  )
}

export default Table