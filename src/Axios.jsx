import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://whatsapp-chat-analysis-backend.onrender.com",
    withCredentials:true,
})