import React from 'react'
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import DropdownLatest from '../components/dropdownLatest'
import Table from '../components/table';
import { FaEllipsisV } from 'react-icons/fa';

const ListPage = () => {
  return (
    <div>
      <div className='flex justify-between py-[40px]'>
        <div >
          <div className='mb-[16px] text-[24px] font-bold'>List</div>
          <div className='flex items-center gap-3'>
          <div className='text-[14px]'>Dashboard</div>
          <div className='w-[4px] h-[4px] bg-gray-600 rounded-full'></div>
          <div className='text-[14px]'>User</div>
          <div className='w-[4px] h-[4px] bg-gray-600 rounded-full'></div>
          <div className='text-[14px]'>List</div>
          </div>
        </div>
        <div> 
          <button className='bg-[#1C252E] flex items-center text-white p-2 rounded-md'>
          <GoPlus className='text-[22px]' />
          <span className='text-[14px] font-bold'>New post</span>
          </button>
        </div>
      </div>


      <div className='-[1px] border-gray-300 shadow-custom rounded-[20px]'>

          <div className='flex gap-[30px] py-[20px] px-4 border-b-[1px] border-b-gray-200'>
            <div className='flex gap-1'>
              <div className='text-[14px] font-[600] '>All</div>
              <div className='bg-[#1C252E] font-[600] text-[12px] flex justify-center items-center w-[24px] h-[24px] rounded-md text-white'>19</div>
            </div>
          <div className='flex gap-1'>
              <div className='text-[14px] font-[600] text-[#637381]'>Active</div>
              <div className='bg-[#DBF6E5] font-[600]  text-[#118D57] text-[12px] flex justify-center items-center w-[24px] h-[24px] rounded-md'>12</div>
            </div>
          <div className='flex gap-1'>
              <div className='text-[14px] font-[600] text-[#637381]'>Pending</div>
              <div className='bg-[#FFF1D6] text-[#B76E00] font-[600]  text-[12px] flex justify-center items-center w-[24px] h-[24px] rounded-md'>10</div>
            </div>
          <div className='flex gap-1'>
              <div className='text-[14px] font-[600] text-[#637381]'>Banned</div>
              <div className='bg-[#FFE4DE] text-[#C51D18] font-[600]  text-[12px] flex justify-center items-center w-[24px] h-[24px] rounded-md'>6</div>
            </div>
          <div className='flex gap-1'>
              <div className='text-[14px] font-[600] text-[#637381]'>Rejected</div>
              <div className='bg-[#EDEFF1] text-[#696764] font-[600]  text-[12px] flex justify-center items-center w-[24px] h-[24px] rounded-md'>2</div>
            </div>
          </div>



          <div className='flex justify-between items-center py-[20px] px-[10px]' >
          <DropdownLatest/>
            <div className='flex w-[60%] border-gray-300 rounded-md items-center border group hover:border-gray-950 px-2 py-1 '>
              <CiSearch className='text-[#919EAB] font-bold text-[22px]' />
              <input
                type="text"
                placeholder='Search..'
                className='p-2 outline-none bg-transparent flex-1'
              />
            </div>
            <FaEllipsisV className='text-[#637381]' />
          </div>
          <Table/>

      </div>
     
     
    </div>
  )
}

export default ListPage