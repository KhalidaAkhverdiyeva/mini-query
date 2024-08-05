import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import Table from '../components/table/Table';
import { FaEllipsisV } from 'react-icons/fa';
import useFetchedUsers  from '../hooks/useFetchedUsers';
import TableSearch from '../components/table/tableSearch';
import RoleFilter from '../components/table/RoleFilter';
import AddUserModal from '../components/table/AddUserModal';

const ListPage = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const { data, error, isLoading, refetch } = useFetchedUsers(filter);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


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

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role); 
  };
  const filteredData = (data || []).filter(user => {
    const matchesSearchQuery = 
      (user.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (user.email?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (user.phoneNumber?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (user.company?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (user.role?.toLowerCase() || '').includes(searchQuery.toLowerCase());
  
    const matchesRole = selectedRole === 'All' || user.role === selectedRole;
  
    return matchesSearchQuery && matchesRole;
  });

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
          <button onClick={openModal} className='bg-[#1C252E] flex items-center text-white p-2 rounded-md'>
            <GoPlus className='text-[22px]' />
            <span  className='text-[14px] font-bold'>New post</span>
          </button>
          <AddUserModal isOpen={isModalOpen} onClose={closeModal} refetchUsers={refetch} />
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
         
          <RoleFilter onRoleSelect={handleRoleSelect}/>

          < TableSearch onSearch={handleSearch}/>
         
          <FaEllipsisV className='text-[#637381]' />
        </div>
        <Table initialData={filteredData} />
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
