import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FileUploader from '../form/fileUploader'; 

const BlogForm = () => {
  
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      content: '',
      tags: '',
      metaTitle: '',
      file: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
      content: Yup.string().required('Content is required'),
      tags: Yup.string(),
      metaTitle: Yup.string(),
      file: Yup.mixed().required('Cover image is required'),
    }),
    onSubmit: (values) => {
      console.log('Form values:', values);

      formik.resetForm();
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue('file', reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      formik.setFieldValue('file', null);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className='flex justify-center w-[1110px] pb-[70px]'>

      <div className='w-[880px] flex flex-col gap-4'>

        <div id='Beginning' className='shadow-custom rounded-[15px]'>
          <div className='p-6 border-b-[1px] border-b-gray-200'>
            <div className='text-[18px] font-[600]'>Details</div>
            <div className='text-[14px] text-gray-400'>Title, short description, image...</div>
          </div>

          <div className='p-6 flex flex-col gap-3'>
            <input
              type="text"
              name="title"
              placeholder='Post title'
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]'
            />
            {formik.touched.title && formik.errors.title ? (
              <p className='text-red-500 text-[12px]'>{formik.errors.title}</p>
            ) : null}

            <input
              type="text"
              name="description"
              placeholder='Description'
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='p-3 pb-16 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]'
            />
            {formik.touched.description && formik.errors.description ? (
              <p className='text-red-500 text-[12px]'>{formik.errors.description}</p>
            ) : null}

            <span className='text-[14px] font-semibold'>Content</span>
            <input
              type="text"
              name="content"
              placeholder='Write something awesome..'
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='p-3 pb-[150px] bg-[#F6F7F8] hover:border-black outline-none text-[14px] w-full border-[1px] border-gray-200 rounded-[10px]'
            />
            {formik.touched.content && formik.errors.content ? (
              <p className='text-red-500 text-[12px]'>{formik.errors.content}</p>
            ) : null}

            <span className='text-[14px] font-semibold'>Cover</span>
            <FileUploader
              name="file"
              onChange={handleFileChange}
              value={formik.values.file}
            />
            {formik.touched.file && formik.errors.file ? (
              <p className='text-red-500 text-[12px]'>{formik.errors.file}</p>
            ) : null}
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
              name="tags"
              placeholder='Tags'
              value={formik.values.tags}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='p-3 hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]'
            />
            <input
              type="text"
              name="metaTitle"
              placeholder='Meta title'
              value={formik.values.metaTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='p-3 pb-[30px] hover:border-black outline-none text-[14px] w-full bg-transparent border-[1px] border-gray-200 rounded-[10px]'
            />
          </div>
        </div>

        <div id="Submit" className='flex justify-end gap-4'>
          <button
            type="button"
            className='px-4 py-2 text-gray-800 rounded-md font-bold border border-gray-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'
          >
            Preview
          </button>
          <button
            type="submit"
            className='px-4 py-2 bg-[#1C252E] text-white font-bold rounded-md border border-[#1C252E] hover:bg-[#16202D] focus:outline-none focus:ring-2 focus:ring-[#1C252E] focus:ring-opacity-50'
          >
            Create post
          </button>
        </div>

      </div>

    </form>
  );
};

export default BlogForm;
