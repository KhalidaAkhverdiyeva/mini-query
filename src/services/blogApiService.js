import { useQuery } from 'react-query';
import { api } from './mainApi';



// FETCH BLOGS

const fetchBlogs = async () => {
    try {
        const response = await api.get('/blog');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export const useFetchBlogs = () => {
    return useQuery('blogs', fetchBlogs);
};
