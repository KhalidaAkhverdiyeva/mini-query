import React, {useState} from 'react'
import { CiSearch } from 'react-icons/ci';

const TableSearch = ( { onSearch}) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className='flex w-[840px] border-gray-300 rounded-md items-center border group hover:border-gray-950 px-2 py-1'>
    <CiSearch className='text-[#919EAB] font-bold text-[22px]' />
    <input
      type="text"
      placeholder='Search..'
      className='p-2 outline-none bg-transparent flex-1'
      value={query}
      onChange={handleChange}
    />
  </div>
  )
}

export default TableSearch