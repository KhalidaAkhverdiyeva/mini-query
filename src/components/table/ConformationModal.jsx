import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';


 

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Confirm Deletion</h3>
        <AiOutlineClose className="text-gray-500 cursor-pointer" onClick={onClose} />
      </div>
      <p className="mb-7 text-left text-[15px]">Are you sure you want to delete this user?</p>
      <div className="flex justify-end gap-4">
        <button
          onClick={onConfirm}
          className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default ConfirmationModal