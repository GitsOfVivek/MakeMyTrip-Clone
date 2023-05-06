import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		auth: false,
		userData: {},
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state.user.userData = { ...action.payload };
			state.user.auth = true;
		},
		logout: state => {
			state.user.auth = false;
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
