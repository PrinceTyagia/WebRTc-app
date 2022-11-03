import axios from "axios";
// 280421188
const api = axios.create({
  baseURL: `http://localhost:5500`,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// List of all the endpoints

export default api;

export const sendOtp = (data) => api.post("/api/send-otp", data);
export const verifyOtp = (data) => api.post("/api/verify-otp", data);
