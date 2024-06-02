import axios from 'axios';
import {URL} from '../../constants/urls';

export const $host = axios.create({
  baseURL: URL.DB_URL,
  // headers: {'Content-Type': 'multipart/form-data'},
});

export const $fd = axios.create({
  baseURL: URL.DB_URL,
  headers: {'Content-Type': 'multipart/form-data'},
});
