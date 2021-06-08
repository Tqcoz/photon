import axios from "axios";

export const auth = axios.create({
    baseURL: 'https://api.getphoton.app/auth',
    timeout: 4000,
});
export const api = (token: string) => axios.create({
    baseURL: 'https://api.getphoton.app/api',
    timeout: 4000,
    headers: {token: token}
});