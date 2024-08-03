import React from 'react'
import Cards from '../components/card/cards';
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import DropdownLatest from '../components/card/dropdownLatest'
import { Link } from 'react-router-dom';




const CardPage = () => {
  return (
    <div >
      <div className='flex justify-between py-[40px]'>
        <div >
          <div className='mb-[16px] text-[24px] font-bold'>Blog</div>
          <div className='flex items-center gap-3'>
          <div className='text-[14px]'>Dashboard</div>
          <div className='w-[4px] h-[4px] bg-gray-600 rounded-full'></div>
          <div className='text-[14px]'>Blog</div>
          <div className='w-[4px] h-[4px] bg-gray-600 rounded-full'></div>
          <div className='text-[14px]'>List</div>
          </div>
        </div>
        <Link to="/new"  >
        <div> 
          <button className='bg-[#1C252E] flex items-center text-white p-2 rounded-md'>
          <GoPlus className='text-[22px]' />
          <span className='text-[14px] font-bold'>New post</span>
          </button>
        </div>
        
        </Link>
       
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex w-[260px] border-gray-300 rounded-md items-center border group hover:border-gray-950 px-2 py-1 '>
        <CiSearch className='text-[#919EAB] font-bold text-[22px]' />
        <input
          type="text"
          placeholder='Search..'
          className='p-2 outline-none bg-transparent flex-1'
        />
      </div>
        <DropdownLatest/>
      </div>
      <div className='flex gap-[30px] py-[40px]'>
        <div className='flex gap-1'>
          <div className='text-[16px] font-[600] '>All</div>
          <div className='bg-[#1C252E] font-[600] text-[12px] flex justify-center items-center w-[24px] h-[24px] rounded-md text-white'>19</div>
        </div>
       <div className='flex gap-1'>
          <div className='text-[14px] font-[600] text-[#637381]'>Published</div>
          <div className='bg-[#D6F4F9] font-[600]  text-[#006C9C] text-[12px] flex justify-center items-center w-[24px] h-[24px] rounded-md'>12</div>
        </div>
       <div className='flex gap-1'>
          <div className='text-[14px] font-[600] text-[#637381]'>Draft</div>
          <div className='bg-[#EDEFF1] font-[600]  text-[12px] flex justify-center items-center w-[24px] h-[24px] rounded-md'>7</div>
        </div>
      </div>
      <Cards/>
     
    </div>
  )
}

export default CardPage