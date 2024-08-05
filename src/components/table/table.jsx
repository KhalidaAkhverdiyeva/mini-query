import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { IoMdArrowUp } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import RowsPerPageSelector from './RowsPerPageSelector';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import getStatusClass from '../../helpers/statusStyles';
import UpdateModal from './UpdateModal';
import useDeleteUser from '../../hooks/useDeleteUser'; 
import ConfirmationModal from '../table/ConformationModal'; 

const Table = ({ initialData }) => {
    const [showOptions, setShowOptions] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false); 
    const [selectedUser, setSelectedUser] = useState(null);
    const [data, setData] = useState(initialData);

    const { mutate: deleteUser, isLoading: isDeleting } = useDeleteUser();

    const openModal = (user) => {
        setIsModalOpen(true);
        setSelectedUser(user);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    const handleOptionsClick = (index) => {
        setShowOptions(index === showOptions ? null : index);
    };

    const handleUpdateUser = (updatedUser) => {
        setData(prevData =>
            prevData.map(user => (user.id === updatedUser.id ? updatedUser : user))
        );
        closeModal();
    };

    const openConfirmModal = (user) => {
        setSelectedUser(user);
        setIsConfirmModalOpen(true);
    };

    const closeConfirmModal = () => {
        setIsConfirmModalOpen(false);
        setSelectedUser(null);
    };

    const handleDeleteUser = () => {
        if (selectedUser) {
            deleteUser(selectedUser.id, {
                onSuccess: () => {
                    setData(prevData => prevData.filter(user => user.id !== selectedUser.id));
                    closeConfirmModal(); 
                },
                onError: () => {
                    closeConfirmModal();
                }
            });
        }
    };

    return (
        <div>
            <table className="min-w-full bg-white">
                <thead className="bg-[#F4F6F8] text-[#6B7A88]">
                    <tr>
                        <th className="p-[14px] font-[600] text-[14px] text-left">
                            <input type="checkbox" className="form-checkbox h-[20px] w-[20px] border-gray-300 rounded-md checked:bg-green-600 checked:border-green-600 checked:accent-white" />
                        </th>
                        <th className="p-[14px] font-[600] text-[14px] text-left flex items-center gap-2">
                            Name <IoMdArrowUp />
                        </th>
                        <th className="p-[14px] font-[600] text-[14px] text-left">Phone number</th>
                        <th className="p-[14px] font-[600] text-[14px] text-left">Company</th>
                        <th className="p-[14px] font-[600] text-[14px] text-left">Role</th>
                        <th className="p-[14px] font-[600] text-[14px] text-left">Status</th>
                        <th className="p-[14px] font-[600] text-[14px] text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={user.id} className="border-b border-dashed border-gray-200 text-[14px] hover:bg-[#F4F6F8]">
                            <td className="p-[14px]">
                                <input type="checkbox" className="form-checkbox h-[20px] w-[20px] border-gray-300 rounded-sm checked:bg-green-600 checked:border-green-600 checked:accent-white" />
                            </td>
                            <td className="p-[14px]">
                                <div className="flex items-center">
                                    <img
                                        src={user.file}
                                        alt={user.name}
                                        className="rounded-full mr-4 w-[40px] h-[40px]"
                                    />
                                    <div>
                                        <div className="font-medium text-[#1C252E]">{user.name}</div>
                                        <div className="text-[#A2AEB8] font-[500]">{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-[14px] text-[#1C252E] whitespace-nowrap">{user.phoneNumber}</td>
                            <td className="p-[14px] text-[#1C252E] whitespace-nowrap">{user.company}</td>
                            <td className="p-[14px] text-[#1C252E] whitespace-nowrap">{user.role}</td>
                            <td className="p-[14px] text-[#1C252E]">
                                <span className={getStatusClass(user.status)}>
                                    {user.status}
                                </span>
                            </td>
                            <td className="p-[14px] pt-[30px] flex items-center justify-end space-x-4">
                                <FaPen onClick={() => openModal(user)} className='text-[17px] text-[#637381] align-middle cursor-pointer' />
                                <UpdateModal isOpen={isModalOpen} onClose={closeModal} user={selectedUser} onUpdate={handleUpdateUser} />
                                <div className="relative">
                                    <FaEllipsisV
                                        className="text-gray-500 cursor-pointer align-middle"
                                        onClick={() => handleOptionsClick(index)}
                                    />
                                    {showOptions === index && (
                                        <div className="absolute right-0 w-40 mt-2 bg-white border rounded shadow-lg z-50">
                                            <ul>
                                                <li className="text-red-600 px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => openConfirmModal(user)}>
                                                    {isDeleting ? 'Deleting...' : 'Delete'}
                                                </li>
                                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='relative flex gap-3 items-center justify-end text-left z-40 py-[15px] px-[20px]'>
                <RowsPerPageSelector />
                <div className='text-[#1C252E] text-[14px]'>1–5 of 20</div>
                <div className='flex'>
                    <HiOutlineChevronLeft />
                    <HiOutlineChevronRight />
                </div>
            </div>
            <ConfirmationModal
                isOpen={isConfirmModalOpen}
                onClose={closeConfirmModal}
                onConfirm={handleDeleteUser}
            />
        </div>
    );
};

export default Table;
