import classNames from "classnames";

export const getStatusClass = (status) => {
    return classNames({
        'inline-block px-[6px] py-[3px] text-[12px] font-[700] rounded-md': true,
        'text-[#B71D18] bg-[#F7DDD8]': status === 'Banned',
        'text-[#B97106] bg-[#F7EAD0]': status === 'Pending',
        'text-[#118D57] bg-[#D3EFDF]': status === 'Active',
        'text-[#637381] bg-[#E5E8EB]': status === 'Rejected',
    });
};

export const getBlogButtonStyles = (status) => {
    switch (status) {
      case 'Published':
        return 'bg-orange-100 text-orange-800'; 
      case 'Draft':
        return 'bg-gray-200 text-gray-600'; 
      default:
        return 'bg-gray-200 text-gray-600'; 
    }
};