import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bookingService from "../../services/booking.service";
import roomService from "../../services/room.service";
import { getCurrentUser } from "../../services/auth.service";

const BookingForm = () => {
	const [rooms, setRooms] = useState([]);
	const [selectedRoom, setSelectedRoom] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [message, setMessage] = useState("");
	const currentUser = useSelector(getCurrentUser);
	const dispatch = useDispatch();

	useEffect(() => {
		roomService.getRooms().then((response) => {
			setRooms(response.data);
		});
	}, []);

	const handleBooking = (e) => {
		e.preventDefault();
		const booking = {
			roomId: selectedRoom,
			userId: currentUser.id,
			startDate,
			endDate,
		};

		bookingService
			.createBooking(booking)
			.then(() => {
				setMessage("Booking successful");
			})
			.catch(() => {
				setMessage("Booking failed");
			});
	};

	return (
		<div>
			<h2>Book a Room</h2>
			<form onSubmit={handleBooking}>
				<div className="form-group">
					<label htmlFor="room">Room</label>
					<select
						className="form-control"
						value={selectedRoom}
						onChange={(e) => setSelectedRoom(e.target.value)}
						required>
						<option value="">Select a Room</option>
						{rooms.map((room) => (
							<option key={room.id} value={room.id}>
								{room.type} - ${room.price}
							</option>
						))}
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="startDate">Start Date</label>
					<input
						type="date"
						className="form-control"
						value={startDate}
						onChange={(e) => setStartDate(e.target.value)}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="endDate">End Date</label>
					<input
						type="date"
						className="form-control"
						value={endDate}
						onChange={(e) => setEndDate(e.target.value)}
						required
					/>
				</div>

				<div className="form-group">
					<button className="btn btn-primary btn-block">Book</button>
				</div>

				{message && (
					<div className="form-group">
						<div className="alert alert-info" role="alert">
							{message}
						</div>
					</div>
				)}
			</form>
		</div>
	);
};

export default BookingForm;
