import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { IoMdArrowUp } from "react-icons/io";
import { FaPen } from "react-icons/fa6";
import RowsPerPageSelector from './RowsPerPageSelector';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";





const Table = () => {
  const [showOptions, setShowOptions] = useState(null);

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
        <tr className="border-b border-dashed border-gray-200 text-[14px] hover:bg-[#F4F6F8]">
          <td className="p-4">
            <input type="checkbox" className="form-checkbox h-[20px] w-[20px] border-gray-300 rounded-sm checked:bg-green-600 checked:border-green-600 checked:accent-white" />
          </td>
          <td className="p-4">
            <div className="flex items-center">
              <img
                src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-20.webp"
                alt="Angelique Morse"
                className="rounded-full mr-4 w-[40px] h-[40px]"
              />
              <div>
                <div className="font-medium text-[#1C252E]">Angelique Morse</div>
                <div className="text-[#A2AEB8] font-[500]">benny89@yahoo.com</div>
              </div>
            </div>
          </td>
          <td className="p-4 text-[#1C252E]">+46 8 123 456</td>
          <td className="p-4 text-[#1C252E]">Wuckert Inc</td>
          <td className="p-4 text-[#1C252E]">Content Creator</td>
          <td className="p-4 text-[#1C252E]">
            <span className="inline-block px-[6px] py-[3px] text-[12px] font-[700] rounded-md text-[#B71D18] bg-[#F7DDD8]">
              Banned
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
        <tr className="border-b border-dashed border-gray-200 text-[14px] hover:bg-[#F4F6F8]">
          <td className="p-4">
            <input type="checkbox" className="form-checkbox h-[20px] w-[20px] border-gray-300 rounded-md checked:bg-green-600 checked:border-green-600 checked:accent-white" />
          </td>
          <td className="p-4">
            <div className="flex items-center">
              <img 
                src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-17.webp"
                alt="Ariana Lang"
                className="rounded-full mr-4 w-[40px] h-[40px]"
              />
              <div>
                <div className="font-medium text-[#1C252E]">Ariana Lang</div>
                <div className="text-[#A2AEB8] font-[500]">avery43@hotmail.com</div>
              </div>
            </div>
          </td>
          <td className="p-4 text-[#1C252E]">+54 11 1234-5678</td>
          <td className="p-4 text-[#1C252E]">Feest Group</td>
          <td className="p-4 text-[#1C252E]">IT Administrator</td>
          <td className="p-4 text-[#1C252E]">
            <span className="inline-block px-[6px] py-[3px] text-[12px] font-[700] rounded-md text-[#B76E00] bg-[#F7EAD0]">
              Pending
            </span>
          </td>
          <td className="p-4 pt-[30px] flex items-center justify-end space-x-4">
            <FaPen className='text-[17px] text-[#637381] align-middle' />
            <div className="relative">
              <FaEllipsisV
                className="text-gray-500 cursor-pointer align-middle"
                onClick={() => handleOptionsClick(1)}
              />
              {showOptions === 1 && (
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