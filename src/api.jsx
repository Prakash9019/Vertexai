import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/auth" });

export const registerUser = (data) => API.post("/register", data);
export const verifyEmail = (token) => API.get(`/verify/${token}`);
export const setPassword = (data) => API.post("/set-password", data);
export const updateProfile = (data) => API.put("/profile", data);
export const setUsername = (data) => API.post("/set-username", data);
export const loginUser = (data) => API.post("/login", data);
