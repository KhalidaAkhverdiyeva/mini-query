import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi';

const RoleFilter = ({ onRoleSelect }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleRoleClick = (role) => {
    onRoleSelect(role); 
    setIsOpen(false); 
  };

  return (
    <div className="relative inline-block text-left  ">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-3  border-[1px] hover:border-black text-[14px] border-gray-300 text-gray-500 rounded-md   "
      >
        Role
        <HiChevronDown className={` ml-[120px] text-[20px] transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg overflow-y-auto max-h-60">
          <ul>
            {[
              "IT Administrator",
              "Financial Planner",
              "HR Recruiter",
              "Graphic Designer",
              "Network Engineer",
              "Sales Manager",
              "Data Analyst",
              "Project Coordinator",
              "Business Consultant",
              "Team Leader",
              "CEO",
              "Marketing Strategist",
              "Public Relations Officer",
              "CTO",
              "Product Owner",
              "Operations Manager",
              "Research Scientist",
              "Administrative Assistant",
              "Customer Support Specialist"

            ].map((job, index) => (
              <li key={index}
               className="px-4 text-[14px] py-2 hover:bg-gray-100 cursor-pointer"
               onClick={() => handleRoleClick(job)}
               >
                {job}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default RoleFilter