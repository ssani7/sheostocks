import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ProductPurchaseState {
	_id?: string;
	name: string;
	quantity: number;
	releaseDate: Date | null;
	brand: string;
	model: string;
	size: string;
	style: string;
	color: string;
	price: number;
	image: string;
	material: string;
	stock_alert: number;
}

const initialState: ProductPurchaseState = {
	_id: '',
	name: '',
	quantity: 0,
	releaseDate: null,
	brand: '',
	model: '',
	style: '',
	size: '',
	color: '',
	price: 0,
	image: '',
	material: '',
	stock_alert: 0,
};

export const productReducer = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProduct: (state: any, action: PayloadAction<Partial<ProductPurchaseState>>) => {
			const payloadArr = Object.keys(action.payload);
			payloadArr.forEach((key) => (state[key as keyof ProductPurchaseState] = action.payload[key as keyof ProductPurchaseState]));
		},
		resetProduct: (state: any) => {
			const payloadArr = Object.keys(state);
			payloadArr.forEach((key) => {
				if (typeof state[key] === 'string') state[key] = '';
				else if (typeof state[key] === 'number') state[key] = 0;
				else state[key] = null;
			});
		},
	},
});

export const { setProduct, resetProduct } = productReducer.actions;

export default productReducer.reducer;
