// ✅ axiosInstance.js
import axios from "axios";
import { showErrorToast } from "../utils/toastUtils";

const BASE_URL = "https://smsbackend-d2hd.onrender.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Attach token to headers
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

// Global error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      showErrorToast("Session expired. Please log in again.");
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/login";
    } else if (status === 403) {
      showErrorToast("Unauthorized access.");
    } else if (status >= 500) {
      showErrorToast("Server error. Please try again later.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
