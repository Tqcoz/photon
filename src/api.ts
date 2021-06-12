import axios from "axios";
import Cookies from "js-cookie";

export const auth = axios.create({
    baseURL: 'https://server.getphoton.app/auth',
    timeout: 4000,
});
export const api = (token?: string) => axios.create({
    baseURL: 'https://server.getphoton.app/api',
    timeout: 4000,
    headers: {Authorization: `Bearer ${token || Cookies.get('token')}`}
});
export const nextAPI = axios.create({
    baseURL: 'https://getphoton.app/api',
    timeout: 4000,
});