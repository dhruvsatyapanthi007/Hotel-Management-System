import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/bookings/";

export const createBooking = (booking) => {
	return axios.post(API_URL, booking, { headers: authHeader() });
};

export const getBookingsByUser = (userId) => {
	return axios.get(API_URL + userId, { headers: authHeader() });
};

export const cancelBooking = (id) => {
	return axios.put(API_URL + id, {}, { headers: authHeader() });
};
