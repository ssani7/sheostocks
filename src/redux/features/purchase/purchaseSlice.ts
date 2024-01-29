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
		setProduct: (state, action: PayloadAction<Partial<ProductPurchaseState>>) => {
			state._id = action.payload?._id || state?._id || '';
			state.name = action.payload.name || state.name;
			state.quantity = Number(action.payload.quantity) || state.quantity;
			state.stock_alert = Number(action.payload.stock_alert) || state.quantity;
			state.releaseDate = action.payload.releaseDate || state.releaseDate;
			state.brand = action.payload.brand || state.brand;
			state.model = action.payload.model || state.model;
			state.style = action.payload.style || state.style;
			state.size = action.payload.size || state.size;
			state.color = action.payload.color || state.color;
			state.price = Number(action.payload.price) || state.price;
			state.image = action.payload.image || state.image;
			state.material = action.payload.material || state.material;
		},
		resetProduct: (state) => {
			state._id = '';
			state.name = '';
			state.quantity = 0;
			state.stock_alert = 0;
			state.releaseDate = null;
			state.brand = '';
			state.model = '';
			state.style = '';
			state.size = '';
			state.color = '';
			state.price = 0;
			state.image = '';
			state.material = '';
		},
	},
});

export const { setProduct, resetProduct } = productReducer.actions;

export default productReducer.reducer;
