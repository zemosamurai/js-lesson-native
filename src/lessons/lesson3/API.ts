import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'bc11ef1f';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`/?t=${title}&apikey=${key}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`/?t=${title}&type=${type}&apikey=${key}`)
    }
};


export default API;
