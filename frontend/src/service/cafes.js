import axios from 'axios';
// import { baseUrl } from './config';
const endpoint = '/info';

const getCafeById = (cafeId) => {
    return axios.get(endpoint + '/' + cafeId);
};

export const cafeService = {
    getCafeById
};
