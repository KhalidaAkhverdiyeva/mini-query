import { useMutation } from 'react-query';
import { updateUser } from '../services/userApiService';

const useUpdateUser = () => {
    return useMutation(async ({ userId, updatedData }) => {
        return await updateUser(userId, updatedData);
    });
};

export default useUpdateUser;