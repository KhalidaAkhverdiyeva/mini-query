import React from 'react'
import { IoChevronDown } from "react-icons/io5";
import { useState } from 'react';

const DropdownLatest = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(option);
    setIsOpen(false);
  };



    return (
    <div className="relative inline-block text-left py-7">
   
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border  rounded shadow-sm hover:bg-gray-50 focus:outline-none "
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Sort by: Latest</span>
        <IoChevronDown className="ml-2 w-4 h-4 text-gray-500" />  
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-[100px] bg-white border border-gray-300 rounded shadow-lg"
        >
          <ul className="py-1">
            <li>
              <button
                onClick={() => handleOptionClick('Latest')}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Latest
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOptionClick('Popular')}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Popular
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOptionClick('Oldest')}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Oldest
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownLatest