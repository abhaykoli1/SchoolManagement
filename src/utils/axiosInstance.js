import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://0.0.0.0:8080/api",
});

// Add interceptor to include token automatically
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
