import { configureStore } from '@reduxjs/toolkit';
import { dashboardInfoAPI } from './api/dashboardInfoApi';
// ...

export const store = configureStore({
	reducer: {
		// stocks: stocksReducer
		[dashboardInfoAPI.reducerPath]: dashboardInfoAPI.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dashboardInfoAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
