import { api } from './mainApi';


// FETCH USERZ

export const fetchUsers = async (status) => {
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




//ADD NEW USER 

export const addUser = async (userData) => {
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};


