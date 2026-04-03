import axios from "axios";

// Creates a centralized Axios instance for future backend connections
export const api = axios.create({
  // Use environment variable for backend URL, fallback to localhost for development
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding tokens if needed in the future
api.interceptors.request.use(
  (config) => {
    // Example: const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
