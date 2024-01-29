import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/dashboardInfoApi';
import userReducer from './features/user/userSlice';
import saleReducer from './features/sale/saleSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		sale: saleReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
