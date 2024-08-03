import React from 'react';
import { TbDots } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";
import { PiShareNetworkFill } from "react-icons/pi";



const Cards = () => {
  return (

    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
      <div id='card' className="flex bg-white border  shadow-custom rounded-[15px] overflow-hidden">
        <div className="w-[66%] pt-[24px] pb-[16px] pl-[24px] pr-[10px] flex flex-col gap-[8px]">
          <div className='flex justify-between mb-[16px]'>
            <button className="bg-[#EDEFF1] text-[#637381] px-[6px] text-[12px] font-bold rounded-md">
              Draft
            </button>
            <div className="mt-2 text-[12px] text-[#919EAB] font-[400]">28 Jun 2024</div>
          </div>
          <h2 className="text-[14px] font-semibold mt-2">
            The Future of Renewable Energy: Innovations and Challenges Ahead
          </h2>
          <p className="text-[#637381] mt-2 text-[14px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee...
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
            src="https://api-prod-minimal-v6.pages.dev/assets/images/cover/cover-1.webp"
            alt="Card"
            className="rounded-[15px] w-full h-full object-cover"
          />
          <img
            src="https://api-prod-minimal-v6.pages.dev/assets/images/avatar/avatar-1.webp"
            alt="Avatar"
            className="absolute top-[20px] right-[17px] w-[40px] h-[40px] rounded-full "
          />
        </div>
      </div>
      <div id='card' className="flex bg-white border  shadow-custom rounded-[15px] overflow-hidden">
        <div className="w-[66%] pt-[24px] pb-[16px] pl-[24px] pr-[10px] flex flex-col gap-[8px]">
          <div className='flex justify-between mb-[16px]'>
            <button className="bg-[#EDEFF1] text-[#637381] px-[6px] text-[12px] font-bold rounded-md">
              Draft
            </button>
            <div className="mt-2 text-[12px] text-[#919EAB] font-[400]">28 Jun 2024</div>
          </div>
          <h2 className="text-[14px] font-semibold mt-2">
            The Future of Renewable Energy: Innovations and Challenges Ahead
          </h2>
          <p className="text-[#637381] mt-2 text-[14px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee...
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
            src="https://api-prod-minimal-v6.pages.dev/assets/images/cover/cover-1.webp"
            alt="Card"
            className="rounded-[15px] w-full h-full object-cover"
          />
          <img
            src="https://api-prod-minimal-v6.pages.dev/assets/images/avatar/avatar-1.webp"
            alt="Avatar"
            className="absolute top-[20px] right-[17px] w-[40px] h-[40px] rounded-full "
          />
        </div>
      </div>
      <div id='card' className="flex bg-white border  shadow-custom rounded-[15px] overflow-hidden">
        <div className="w-[66%] pt-[24px] pb-[16px] pl-[24px] pr-[10px] flex flex-col gap-[8px]">
          <div className='flex justify-between mb-[16px]'>
            <button className="bg-[#EDEFF1] text-[#637381] px-[6px] text-[12px] font-bold rounded-md">
              Draft
            </button>
            <div className="mt-2 text-[12px] text-[#919EAB] font-[400]">28 Jun 2024</div>
          </div>
          <h2 className="text-[14px] font-semibold mt-2">
            The Future of Renewable Energy: Innovations and Challenges Ahead
          </h2>
          <p className="text-[#637381] mt-2 text-[14px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee...
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
            src="https://api-prod-minimal-v6.pages.dev/assets/images/cover/cover-1.webp"
            alt="Card"
            className="rounded-[15px] w-full h-full object-cover"
          />
          <img
            src="https://api-prod-minimal-v6.pages.dev/assets/images/avatar/avatar-1.webp"
            alt="Avatar"
            className="absolute top-[20px] right-[17px] w-[40px] h-[40px] rounded-full "
          />
        </div>
      </div>
      <div id='card' className="flex bg-white border  shadow-custom rounded-[15px] overflow-hidden">
        <div className="w-[66%] pt-[24px] pb-[16px] pl-[24px] pr-[10px] flex flex-col gap-[8px]">
          <div className='flex justify-between mb-[16px]'>
            <button className="bg-[#EDEFF1] text-[#637381] px-[6px] text-[12px] font-bold rounded-md">
              Draft
            </button>
            <div className="mt-2 text-[12px] text-[#919EAB] font-[400]">28 Jun 2024</div>
          </div>
          <h2 className="text-[14px] font-semibold mt-2">
            The Future of Renewable Energy: Innovations and Challenges Ahead
          </h2>
          <p className="text-[#637381] mt-2 text-[14px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee...
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
            src="https://api-prod-minimal-v6.pages.dev/assets/images/cover/cover-1.webp"
            alt="Card"
            className="rounded-[15px] w-full h-full object-cover"
          />
          <img
            src="https://api-prod-minimal-v6.pages.dev/assets/images/avatar/avatar-1.webp"
            alt="Avatar"
            className="absolute top-[20px] right-[17px] w-[40px] h-[40px] rounded-full "
          />
        </div>
      </div>
      <div id='card' className="flex bg-white border  shadow-custom rounded-[15px] overflow-hidden">
        <div className="w-[66%] pt-[24px] pb-[16px] pl-[24px] pr-[10px] flex flex-col gap-[8px]">
          <div className='flex justify-between mb-[16px]'>
            <button className="bg-[#EDEFF1] text-[#637381] px-[6px] text-[12px] font-bold rounded-md">
              Draft
            </button>
            <div className="mt-2 text-[12px] text-[#919EAB] font-[400]">28 Jun 2024</div>
          </div>
          <h2 className="text-[14px] font-semibold mt-2">
            The Future of Renewable Energy: Innovations and Challenges Ahead
          </h2>
          <p className="text-[#637381] mt-2 text-[14px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee...
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
            src="https://api-prod-minimal-v6.pages.dev/assets/images/cover/cover-1.webp"
            alt="Card"
            className="rounded-[15px] w-full h-full object-cover"
          />
          <img
            src="https://api-prod-minimal-v6.pages.dev/assets/images/avatar/avatar-1.webp"
            alt="Avatar"
            className="absolute top-[20px] right-[17px] w-[40px] h-[40px] rounded-full "
          />
        </div>
      </div>
      

     
    </div>
  );
};

export default Cards;
