import axios from "axios";

export const $host = axios.create({
    baseURL: 'http://10.0.2.2:5000',
    // headers: {"Content-Type": "multipart/form-data"}
})