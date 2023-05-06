import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	ticket: {},
};

export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		bookTicket: (state, action) => {
			state.ticket = { ...action.payload };
		},
	},
});

export const { bookTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
