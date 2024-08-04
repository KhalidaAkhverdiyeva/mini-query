import { api } from './mainApi';
import { useQuery } from 'react-query';


const fetchUsers = async (status) => {
    try {
        const response = await api.get('/users', {
            params: {
                status: status === 'All' ? '' : status
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


const useFetchedUsers = (status) => {
    return useQuery(['users', status], () => fetchUsers(status), {

    });
}

export default useFetchedUsers;


