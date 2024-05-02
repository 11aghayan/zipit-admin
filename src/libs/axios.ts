import axios from "axios";

const BASE_URL = 'https://zipit-server.onrender.com/api/v1';

// const BASE_URL = 'http://localhost:3200/api/v1';

export default axios.create({
  baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});