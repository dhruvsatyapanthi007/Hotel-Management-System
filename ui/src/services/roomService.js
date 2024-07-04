import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/rooms/";

export const getRooms = () => {
	return axios.get(API_URL, { headers: authHeader() });
};

export const createRoom = (room) => {
	return axios.post(API_URL, room, { headers: authHeader() });
};

export const updateRoom = (id, room) => {
	return axios.put(API_URL + id, room, { headers: authHeader() });
};

export const deleteRoom = (id) => {
	return axios.delete(API_URL + id, { headers: authHeader() });
};
