import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../config"; // Ensure BASE_URL is defined in config

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Request timeout
});

// Request interceptor to add token to headers
API.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(await AsyncStorage.getItem("accessToken"));
    if (token) {
      config.headers.Authorization = `Bearer ${token.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      // Handle specific error responses
      if (error.response.status === 401) {
        // Token expired or unauthorized, handle accordingly
        // You may want to log the user out or refresh the token here
      }
    }
    return Promise.reject(error);
  }
);

export default API;
