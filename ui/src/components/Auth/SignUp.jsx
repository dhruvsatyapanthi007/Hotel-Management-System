import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/authSlice";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [successful, setSuccessful] = useState(false);
	const [message, setMessage] = useState("");

	const dispatch = useDispatch();

	const handleRegister = (e) => {
		e.preventDefault();

		setMessage("");
		setSuccessful(false);

		dispatch(register({ username, password }))
			.unwrap()
			.then(() => {
				setSuccessful(true);
				setMessage("Registration successful");
			})
			.catch(() => {
				setSuccessful(false);
				setMessage("Failed to register");
			});
	};

	return (
		<div className="col-md-12">
			<div className="card card-container">
				<form onSubmit={handleRegister}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							className="form-control"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<button className="btn btn-primary btn-block">
							<span>Sign Up</span>
						</button>
					</div>

					{message && (
						<div className="form-group">
							<div
								className={
									successful
										? "alert alert-success"
										: "alert alert-danger"
								}
								role="alert">
								{message}
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Signup;
