import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e006cbe5edfc47eda55c0826968bda1a'
    },
});