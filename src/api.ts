import axios from 'axios';

const API_URL = 'https://getboardgames-jxxjux7fua-ey.a.run.app/'; 

export const fetchData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};