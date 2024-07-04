import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
	"auth/register",
	async ({ username, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(username, password);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const login = createAsyncThunk(
	"auth/login",
	async ({ username, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(username, password);
			return { user: response.data };
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const logout = createAsyncThunk("auth/logout", async () => {
	AuthService.logout();
});

const authSlice = createSlice({
	name: "auth",
	initialState: user
		? { isLoggedIn: true, user }
		: { isLoggedIn: false, user: null },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(register.fulfilled, (state, action) => {
			state.isLoggedIn = false;
		});
		builder.addCase(register.rejected, (state, action) => {
			state.isLoggedIn = false;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload.user;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.isLoggedIn = false;
			state.user = null;
		});
		builder.addCase(logout.fulfilled, (state, action) => {
			state.isLoggedIn = false;
			state.user = null;
		});
	},
});

export default authSlice.reducer;
