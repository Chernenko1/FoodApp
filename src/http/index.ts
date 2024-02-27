import axios from "axios";

export const $host = axios.create({
    baseURL: 'http://192.168.38.68:5000',
    // headers: {"Content-Type": "multipart/form-data"}
})