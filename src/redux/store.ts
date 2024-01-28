import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/dashboardInfoApi';
// ...

export const store = configureStore({
	reducer: {
		// stocks: stocksReducer
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
