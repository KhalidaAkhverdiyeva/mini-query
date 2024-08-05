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

//UPDATE USER


export const updateUser = async (userId, updatedData) => {
    try {
        const response = await api.put(`/users/${userId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }

}

//DELETE USER 


export const deleteUser = async (userId) => {
    try {

        const response = await api.delete(`/users/${userId}`);
        return response.data;

    } catch (error) {

        console.error('Error deleting user:', error);
        throw error;
    }
};
