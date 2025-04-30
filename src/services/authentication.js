import { apiClient } from "./configuration";

export const apiLogin = (payload) => {
	return apiClient.post("/users/login", payload, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const apiSignup = (payLoad) => {
	return apiClient.post("/users/signup", payLoad, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
