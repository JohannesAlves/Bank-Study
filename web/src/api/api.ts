import axios from "axios";

export const api = axios.create({
    baseURL: "https://digitalrepublicserver.onrender.com",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return config;
    }
    config.headers!.Authorization = `Bearer ${token}`;
    return config;
});
