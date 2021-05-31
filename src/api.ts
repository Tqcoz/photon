import axios from "axios";

export const auth = axios.create({
    baseURL: 'http://35.239.214.225:4000/auth',
    timeout: 4000,
});
export const api = (token: string) => axios.create({
    baseURL: 'http://35.239.214.225:4000/api',
    timeout: 4000,
    headers: {token: token}
});