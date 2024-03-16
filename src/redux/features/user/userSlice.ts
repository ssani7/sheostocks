import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
	email: string;
	password: string;
	profilePhoto?: string;
	name?: string;
	address?: string;
	city?: string;
	phone?: string;
	isAdmin?: boolean;
	loadingUser?: boolean;
}

const initialState: CounterState = {
	email: '',
	password: '',
	name: '',
	profilePhoto: '',
	address: '',
	city: '',
	phone: '',
	isAdmin: false,
	loadingUser: false,
};

export const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<CounterState>) => {
			state.email = action.payload.email;
			state.name = action.payload.name;
			state.profilePhoto = action.payload.profilePhoto;
			state.address = action.payload.address;
			state.city = action.payload.city;
			state.phone = action.payload.phone;
			state.isAdmin = action.payload.isAdmin;
			state.loadingUser = false;
		},
		resetUser: (state) => {
			state.email = '';
			state.name = '';
			state.profilePhoto = '';
			state.address = '';
			state.phone = '';
			state.isAdmin = false;
			state.loadingUser = false;
		},
		setLoadingUser: (state, action: PayloadAction<boolean>) => {
			state.loadingUser = action.payload;
		},
	},
});

export const { setUser, resetUser, setLoadingUser } = userReducer.actions;

export default userReducer.reducer;
