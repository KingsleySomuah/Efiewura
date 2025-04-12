import { apiClient } from "./configuration";

export const apiLogin = (payload) => {
    return apiClient.post('/admin/login', payload, {
        headers: {
            "Content-Type" : "application/json"
        }
    })
}