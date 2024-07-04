import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();
		setLoading(true);

		dispatch(login({ username, password }))
			.unwrap()
			.then(() => {
				window.location.reload();
			})
			.catch(() => {
				setLoading(false);
				setMessage("Invalid username or password");
			});
	};

	return (
		<div className="col-md-12">
			<div className="card card-container">
				<form onSubmit={handleLogin}>
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
						<button
							className="btn btn-primary btn-block"
							disabled={loading}>
							{loading && (
								<span className="spinner-border spinner-border-sm"></span>
							)}
							<span>Login</span>
						</button>
					</div>

					{message && (
						<div className="form-group">
							<div className="alert alert-danger" role="alert">
								{message}
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Login;
