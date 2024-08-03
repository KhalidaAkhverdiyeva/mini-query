import React from 'react'
import FileUploader from './fileUploader'

const BlogForm = () => {
  return (
    <form action="" className='flex justify-center w-[1110px] pb-[70px]'>

        <div className=' w-[880px] flex flex-col gap-4  '> 


                
                <div id='Beginning' className='shadow-custom rounded-[15px]'>
                    <div className='p-6 border-b-[1px] border-b-gray-200'>
                    <div className='text-[18px] font-[600]'>Details</div>
                    <div className='text-[14px] text-gray-400'>Title, short description, image...</div>
                    </div>

                    <div className='p-6 flex flex-col gap-3'>

                    <input
                        type="text"
                        placeholder='Post title'
                        className='p-3  hover:border-black outline-none text-[14px] w-full bg-transparent flex-1 border-[1px] border-gray-200 rounded-[10px]'
                    />
                    <input
                        type="text"
                        placeholder='Description'
                        className='p-3 pb-16 hover:border-black outline-none text-top text-[14px] w-full bg-transparent flex-1 border-[1px] border-gray-200 rounded-[10px]'
                    />
                    <span className='text-[14px] font-semibold'>Content</span>

                    <input
                        type="text"
                        placeholder='Write something awesome..'
                        className='p-3 pb-[150px] bg-[#F6F7F8] hover:border-black outline-none text-top text-[14px] w-full  flex-1 border-[1px] border-gray-200 rounded-[10px]'
                    />

                    <span className='text-[14px] font-semibold'>Cover</span>

                    <FileUploader/>




                    </div>
                



                </div>
                <div id='Middle' className='shadow-custom rounded-[15px]'>
                <div className='p-6 border-b-[1px] border-b-gray-200'>
                    <div className='text-[18px] font-[600]'>Properties</div>
                    <div className='text-[14px] text-gray-400'>Additional functions and attributes...</div>
                    </div>
                    <div className='p-6 flex flex-col gap-3'>

                    <input
                        type="text"
                        placeholder='Tags'
                        className='p-3  hover:border-black outline-none text-[14px] w-full bg-transparent flex-1 border-[1px] border-gray-200 rounded-[10px]'
                    />
                    <input
                        type="text"
                        placeholder='Meta title'
                        className='p-3 pb-[30px] hover:border-black outline-none text-top text-[14px] w-full bg-transparent flex-1 border-[1px] border-gray-200 rounded-[10px]'
                    />
                    </div>
                    

                </div>
                <div id="Submit" class="flex justify-end gap-4 ">
                    <button class="px-4 py-2  text-gray-800 rounded-md font-bold border border-gray-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                        Preview
                    </button>
                    <button class="px-4 py-2 bg-[#1C252E] text-white font-bold rounded-md border border-[#1C252E] hover:bg-[#16202D] focus:outline-none focus:ring-2 focus:ring-[#1C252E] focus:ring-opacity-50">
                        Create post
                    </button>
                </div>


        </div>
       


    </form>
  )
}

export default BlogForm