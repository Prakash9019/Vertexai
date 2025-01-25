import axios from "axios";

const API = axios.create({ baseURL: "https://vertxai-backend.vercel.app/api/user" ,
  headers: {
    "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Origin": "*",
  'Content-Type': 'application/json',
   "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
  },
});

// Add a request interceptor to include the JWT token in headers
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const registerUser = (data) => API.post("/register", data);
export const verifyEmail = (data) => API.post("/verify", data);
export const setPassword = (data) => API.post("/set-password", data);
export const updateProfile = (data) => API.put("/profile", data);
export const setUsername = (data) => API.post("/set-username", data);
export const loginUser = (data) => API.post("/login", data);
export const checkUser = (data) => API.post("/checkUser",data);
