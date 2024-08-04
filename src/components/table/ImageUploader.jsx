

const ImageUploader = () => {
 

  return (
    <div className="relative w-full h-full flex items-center justify-center">
    <input
      type="file"
      accept="image/*"
      id="fileInput"
      className="hidden"
    />
    <label
      htmlFor="fileInput"
      className=" bg-white rounded-lg border border-gray-200 hover:border-black cursor-pointer overflow-hidden relative w-full h-full flex items-center justify-center"
      style={{
        backgroundImage: `url('images/imageupload.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Placeholder for image preview */}
    </label>
  </div>
  );
};

export default ImageUploader;
