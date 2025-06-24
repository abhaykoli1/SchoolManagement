import axios from "axios";

const BASE_URL =  "https://smsbackend-d2hd.onrender.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Example interceptor setup (optional)
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle global errors here (e.g., token expiration, 500 errors)
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
