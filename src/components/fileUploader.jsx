import React from 'react'
import { useState } from 'react';

const FileUploader = () => {


    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewUrl(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
  return (
    <div className="relative">
    <input
        type="file"
        accept="image/*"
        id="fileInput"
        className="hidden"
        onChange={handleFileChange}
    />
    <label
        htmlFor="fileInput"
        className="block w-full h-[290px] bg-[#F6F7F8] rounded-[10px] relative cursor-pointer overflow-hidden"
        style={{
            backgroundImage: `url('images/upload2.png')`,  
            backgroundSize: 'contain',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
        }}
    >
        {previewUrl ? (
            <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-contain bg-repeat"
            />

           
        ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
        )}
    </label>
</div>
  )
}

export default FileUploader