import React from 'react';
import { TbDots } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";
import { PiShareNetworkFill } from "react-icons/pi";
import { useFetchBlogs } from '../../services/blogApiService';
import { getBlogButtonStyles } from '../../helpers/statusStyles';



const Cards = () => {


  const { data, error, isLoading } = useFetchBlogs();


  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching blogs: {error.message}</div>;
  return (

    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">

      {data[0].map(blog => {
        return  <div id='card' className="flex bg-white border  shadow-custom rounded-[15px] overflow-hidden">
        <div className="w-[66%] pt-[24px] pb-[16px] pl-[24px] pr-[10px] flex flex-col gap-[8px]">
          <div className='flex justify-between mb-[16px]'>
            <button className={`px-2 text-xs font-bold rounded-md ${getBlogButtonStyles(blog.status)}`}>
              {blog.status}
            </button>
            <div className="mt-2 text-[12px] text-[#919EAB] font-[400]">28 Jun 2024</div>
          </div>
          <h2 className="text-[14px] font-semibold mt-2">
            {blog.title}
          </h2>
          <p className="text-[#637381] mt-2 text-[14px]">
            {blog.content}...
          </p>
          <div className='flex justify-between items-center text-[20px]  text-[#6b7279] py-4'>
            <div ><TbDots  /></div>
            <div className='flex gap-2 text-[12px]'>
              <div className='flex items-center gap-1'>
                <div><FaRegCommentDots /></div>
                <div>1.95k</div>
              </div>
              <div className='flex items-center gap-1'>
                <div><MdRemoveRedEye /></div>
                <div>9.91k</div>
              </div>
              <div className='flex items-center gap-1'>
                <div><PiShareNetworkFill /></div>
                <div>9.12k</div>
              </div>
           
            </div>
          </div>
        </div>
        <div className="relative w-[34%] p-[10px]">
          <img
            src={blog.image}
            alt="Card"
            className="rounded-[15px] w-full h-full object-cover"
          />
          <img
            src="https://api-prod-minimal-v6.pages.dev/assets/images/avatar/avatar-1.webp"
            alt="file "
            className="absolute top-[20px] right-[17px] w-[40px] h-[40px] rounded-full "
          />
        </div>
      </div>
      })}
     
      

     
    </div>
  );
};

export default Cards;
