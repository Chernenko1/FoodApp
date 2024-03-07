import axios from "axios";
import Config from "react-native-config";

export const $host = axios.create({
    baseURL: Config.URL,
    // headers: {"Content-Type": "multipart/form-data"}
})