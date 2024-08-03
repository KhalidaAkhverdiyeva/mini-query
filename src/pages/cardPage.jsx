import React from 'react'
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import DropdownLatest from '../components/dropdownLatest'
import Cards from '../components/cards';



const CardPage = () => {
  return (
    <div >

      <div className='flex justify-between'>
        <div >
          <div className='mb-[16px] text-[24px] font-bold'>List</div>
          <div className='flex items-center gap-3'>
          <div className='text-[14px]'>Dashboard</div>
          <div className='w-[4px] h-[4px] bg-gray-600 rounded-full'></div>
          <div className='text-[14px]'>Blog</div>
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

      <div className='flex justify-between items-center'>
        <div className='flex w-[260px] border-gray-300 rounded-md items-center border border-transparent group hover:border-gray-950 px-2 py-1 '>
        <CiSearch className='text-[#919EAB] font-bold text-[22px]' />
        <input
          type="text"
          placeholder='Search..'
          className='p-2 outline-none bg-transparent flex-1'
        />
      </div>
        <DropdownLatest/>
      </div>

      <div className='flex gap-[30px] mb-[40px]  items-center'>
        <div className='flex gap-2 border-b-[3px] py-2 border-black'>
          <div className='text-[16px] font-[600] '>All</div>
          <div className='bg-[#1C252E] w-[24px] h-[24px] font-bold flex justify-center items-center text-white rounded-md text-[12px]'>19</div>
        </div>
        <div className='flex gap-2 py-2'>
          <div className='text-[14px] text-[#637381] font-[600]'>Published</div>
          <div className='bg-[#D6F4F9] text-[#006C9C] w-[24px] h-[24px]  font-bold flex justify-center items-center rounded-md text-[12px]'>12</div>
        </div>
        <div className='flex gap-2 py-2'>
          <div className='text-[14px] text-[#637381] font-[600]'>Draft</div>
          <div className='bg-[#EDEFF1] text-[#637381] w-[24px] h-[24px]  font-bold flex justify-center items-center rounded-md text-[12px]'>7</div>
        </div>
       
       
    
      </div>

      <Cards/>
     
    </div>
  )
}

export default CardPage