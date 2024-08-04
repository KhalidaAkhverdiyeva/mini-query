import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { CiSearch } from 'react-icons/ci';
import DropdownLatest from '../components/card/dropdownLatest';
import Table from '../components/table/table';
import { FaEllipsisV } from 'react-icons/fa';
import useFetchedUsers from '../services/userApiService';

const ListPage = () => {
  const [filter, setFilter] = useState('All');
  const { data, error, isLoading } = useFetchedUsers(filter);

  const statusCounts = {
    All: data?.length || 0,
    Active: data?.filter(user => user.status === 'Active').length || 0,
    Pending: data?.filter(user => user.status === 'Pending').length || 0,
    Banned: data?.filter(user => user.status === 'Banned').length || 0,
    Rejected: data?.filter(user => user.status === 'Rejected').length || 0,
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users.</div>;

  return (
    <div>
      <div className='flex justify-between py-[40px]'>
        <div>
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
          {['All', 'Active', 'Pending', 'Banned', 'Rejected'].map((status) => (
            <div className='flex gap-1' key={status}>
              <div
                className={`text-[14px] font-[600] ${filter === status ? 'text-[#1C252E]' : 'text-[#637381]'}`}
                onClick={() => handleFilterChange(status)}
              >
                {status}
              </div>
              <div
                className={`font-[600] text-[12px] flex justify-center items-center w-[24px] h-[24px] rounded-md ${filter === status ? getBadgeColor(status) : 'bg-[#EDEFF1] text-[#696764]'}`}
              >
                {statusCounts[status]}
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-between items-center py-[20px] px-[10px]'>
          <DropdownLatest />
          <div className='flex w-[60%] border-gray-300 rounded-md items-center border group hover:border-gray-950 px-2 py-1'>
            <CiSearch className='text-[#919EAB] font-bold text-[22px]' />
            <input
              type="text"
              placeholder='Search..'
              className='p-2 outline-none bg-transparent flex-1'
            />
          </div>
          <FaEllipsisV className='text-[#637381]' />
        </div>
        <Table data={data} />
      </div>
    </div>
  );
};

const getBadgeColor = (status) => {
  switch (status) {
    case 'Active':
      return 'bg-[#DBF6E5] text-[#118D57]';
    case 'Pending':
      return 'bg-[#FFF1D6] text-[#B76E00]';
    case 'Banned':
      return 'bg-[#FFE4DE] text-[#C51D18]';
    case 'Rejected':
      return 'bg-[#EDEFF1] text-[#696764]';
    default:
      return 'bg-[#1C252E] text-white';
  }
};

export default ListPage;
