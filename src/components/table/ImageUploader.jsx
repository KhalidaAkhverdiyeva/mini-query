import React, { useState, useEffect } from 'react';

const ImageUploader = ({ onChange, value, name }) => {
  const [preview, setPreview] = useState(value || '')

  useEffect(() => {
    setPreview(value || '');
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onChange(e); 
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
      onChange(e); 
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        name={name}
        onChange={handleFileChange}
        className="hidden"
      />
      <label
        htmlFor="fileInput"
        className="bg-white rounded-lg border border-gray-200 hover:border-black cursor-pointer overflow-hidden relative w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${preview || 'images/imageupload.png'})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
};

export default ImageUploader;
