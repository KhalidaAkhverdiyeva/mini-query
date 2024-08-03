import React from 'react'
import { useState } from 'react';
import { CgChevronDown } from "react-icons/cg";


const RowsPerPageSelector = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('5');
    const options = ['5', '10', '15'];

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option) => {
        setSelected(option);
        setIsOpen(false);
      };


  return (
    <>

<span className='text-[14px] text-[#1C252E]'>Rows per page:</span>
      <button
        onClick={toggleDropdown}
        className="flex items-center   p-2 rounded-md border border-gray-300"
      >
        <span className='text-[#1C252E] text-[14px]'> {selected}</span>
        <CgChevronDown className="w-4 h-4 text-[#1C252E]" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[70px] bg-white border border-gray-300 rounded-md shadow-lg">
          <ul>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
   
  
  )
}

export default RowsPerPageSelector