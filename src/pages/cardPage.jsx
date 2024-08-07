import React, {useState} from 'react'
import Cards from '../components/card/cards';
import { GoPlus } from "react-icons/go";
import DropdownLatest from '../components/card/dropdownLatest'
import { Link } from 'react-router-dom';
import FormSearch from '../components/form/FormSearch';
import { useFetchBlogs } from '../services/blogApiService';




const CardPage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const {data, error, isLoading, refetch } = useFetchBlogs();

  const handleSearch = (query) => {

    setSearchQuery(query);
  };

  const blogs = Array.isArray(data) && Array.isArray(data[0]) ? data[0] : data || [];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearchQuery =
      (blog.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (blog.content?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      false; 
  
   
    return matchesSearchQuery ;
  });

 
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
       <FormSearch onSearch={handleSearch}/>
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
      <Cards filtered = {filteredBlogs}/>
     
    </div>
  )
}

export default CardPage