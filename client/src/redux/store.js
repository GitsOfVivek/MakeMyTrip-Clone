import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './slice/ticketSlice';
import userReducer from './slice/userSlice';

const store = configureStore({
	reducer: {
		ticket: ticketReducer,
		user: userReducer,
	},
});
export default store;
