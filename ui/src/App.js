import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import RoomList from "./components/Rooms/RoomList";
import BookingForm from "./components/Bookings/BookingForm";

const App = () => {
	const { isLoggedIn } = useSelector((state) => state.auth);

	return (
		<Router>
			<div className="App">
				<div className="container">
					<Switch>
						<Route exact path="/" component={RoomList} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						{isLoggedIn && (
							<Route
								exact
								path="/bookings"
								component={BookingForm}
							/>
						)}
						{/* Add more routes for other components */}
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
