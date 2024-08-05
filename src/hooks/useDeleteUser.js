import { useMutation, useQueryClient } from 'react-query';
import { deleteUser } from '../services/userApiService';

const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation(async (userId) => {
        await deleteUser(userId);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        }
    });
};

export default useDeleteUser;