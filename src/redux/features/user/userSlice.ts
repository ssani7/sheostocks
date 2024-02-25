import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
	email: string;
	password: string;
	name: string;
	profilePhoto: string;
}

const initialState: CounterState = {
	email: '',
	password: '',
	name: '',
	profilePhoto: '',
};

export const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<CounterState>) => {
			state.email = action.payload.email;
			state.name = action.payload.name;
			state.profilePhoto = action.payload.profilePhoto;
		},
		resetUser: (state) => {
			state.email = '';
			state.name = '';
			state.profilePhoto = '';
		},
	},
});

export const { setUser, resetUser } = userReducer.actions;

export default userReducer.reducer;
