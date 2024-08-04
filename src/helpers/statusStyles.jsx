import classNames from "classnames";

const getStatusClass = (status) => {
    
    return classNames ({
        'inline-block px-[6px] py-[3px] text-[12px] font-[700] rounded-md' : true,
        'text-[#B71D18] bg-[#F7DDD8]': status === 'Banned',
        'text-[#B97106] bg-[#F7EAD0]': status === 'Pending',
        'text-[#118D57] bg-[#D3EFDF]': status === 'Active',
        'text-[#637381] bg-[#E5E8EB]': status === 'Rejected',


    })

}

export default getStatusClass