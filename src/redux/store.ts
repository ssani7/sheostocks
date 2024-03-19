import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/dashboardInfoApi';
import userReducer from './features/user/userSlice';
import saleReducer from './features/sale/saleSlice';
import purchaseSlice from './features/purchase/purchaseSlice';
import productFilterSlice from './features/products/productFilter';
import cartSlice from './features/cart/cartSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartSlice,
		sale: saleReducer,
		purchase: purchaseSlice,
		productFilter: productFilterSlice,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
