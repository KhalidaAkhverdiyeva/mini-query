import React from 'react'
import BlogForm from '../components/form/blogForm'

const AddBlog = () => {
  return (
    <div>

      <div className='flex justify-between py-[40px]'>
        <div >
          <div className='mb-[16px] text-[24px] font-bold'>Create a new post</div>
          <div className='flex items-center gap-3'>
          <div className='text-[14px]'>Dashboard</div>
          <div className='w-[4px] h-[4px] bg-gray-600 rounded-full'></div>
          <div className='text-[14px]'>Blog</div>
          <div className='w-[4px] h-[4px] bg-gray-600 rounded-full'></div>
          <div className='text-[14px] text-gray-400'>Create</div>
          </div>
        </div>
      </div>

      <BlogForm/>



    </div>
  )
}

export default AddBlog