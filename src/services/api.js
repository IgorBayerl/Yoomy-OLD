import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.savatan.com/api/'
});

export default api;