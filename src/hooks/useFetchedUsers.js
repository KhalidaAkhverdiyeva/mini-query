import { useQuery } from 'react-query';
import { fetchUsers } from '../services/userApiService';

// hook to fetch users
const useFetchedUsers = (status) => {
    return useQuery(['users', status], () => fetchUsers(status), {

    });
};

export default useFetchedUsers
