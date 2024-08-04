import { QueryClient, useMutation, useQueryClient } from 'react-query';
import { addUser } from '../services/userApiService';


const useAddUser = () => {
    const queryClient = new QueryClient()

    return useMutation(
        (newUser) => addUser(newUser),
        {
            onSuccess: () => {

                queryClient.invalidateQueries('users');
            },
            onError: (error) => {
                console.error('Error adding user:', error);
            }
        }
    )
}
export default useAddUser