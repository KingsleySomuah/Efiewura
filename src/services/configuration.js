// configuration also means settings
// create an axios instance configuration for api calls
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL
export const apiClient = axios.create({
    baseURL : baseURL
})