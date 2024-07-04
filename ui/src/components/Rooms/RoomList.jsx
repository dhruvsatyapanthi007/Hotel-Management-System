import React, { useEffect, useState } from "react";
import roomService from "../../services/room.service";

const RoomList = () => {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		roomService.getRooms().then((response) => {
			setRooms(response.data);
		});
	}, []);

	return (
		<div>
			<h2>Room List</h2>
			<table className="table">
				<thead>
					<tr>
						<th>Type</th>
						<th>Price</th>
						<th>Capacity</th>
						<th>Amenities</th>
						<th>Available</th>
					</tr>
				</thead>
				<tbody>
					{rooms.map((room) => (
						<tr key={room.id}>
							<td>{room.type}</td>
							<td>{room.price}</td>
							<td>{room.capacity}</td>
							<td>{room.amenities}</td>
							<td>{room.isAvailable ? "Yes" : "No"}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RoomList;
