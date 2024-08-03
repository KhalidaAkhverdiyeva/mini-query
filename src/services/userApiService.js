import { api } from './mainApi';
import { useQuery } from 'react-query';

const fetchUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

const useFetchedUsers = () => {
    return useQuery('users', fetchUsers);
}

export default useFetchedUsers;