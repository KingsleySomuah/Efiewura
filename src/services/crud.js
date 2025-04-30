// create all your CRUD functionalities or instances here
import { apiClient } from "./configuration";

export const apiGetAllListings = async () => {
	return apiClient.get("/listings");
};

export const apiAddListing = async (payload) => {
	return apiClient.post("/listings", payload);
};

export const apiGetSingleListing = async (id) => {
	return apiClient.get(`/listings/${id}`);
};

export const apiDeleteListing = (id) => {
	return apiClient.delete(`/listings/${id}`);
};

export const apiUpdateListing = (id, payload) => {
	return apiClient.patch(`/listings/${id}`, payload);
};

export const apiBookListing = (payload) => {
	return apiClient.post(`/booking`, payload, {
		headers: {
			'Content-Type':'application/json'
		}
	})
}