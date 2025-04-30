// configuration also means settings
// create an axios instance configuration for api calls
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
export const apiClient = axios.create({
	baseURL: baseURL,
});

apiClient.interceptors.request.use((config) => {
	// get access token from local storage
	const token = localStorage.getItem("token");
	// Attach token to authorization header
	config.headers.Authorization = `Bearer ${token}`;
	// return config
	return config;
});
