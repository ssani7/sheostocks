import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ProductFilter {
	name: string;
	quantity: number;
	releaseDate: Date | null;
	brand: string;
	model: string;
	style: string;
	size: string;
	color: string;
	price: number;
	image: string;
	material: string;
	stock_alert: number;
}

const initialState: ProductFilter = {
	name: '',
	quantity: 0,
	releaseDate: null,
	brand: '',
	size: '',
	model: '',
	style: '',
	color: '',
	price: 0,
	image: '',
	material: '',
	stock_alert: 0,
};

export const productFilter = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setProductFilter: (state, action: PayloadAction<Partial<ProductFilter>>) => {
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
		resetProductFilter: (state) => {
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

export const { setProductFilter, resetProductFilter } = productFilter.actions;

export default productFilter.reducer;
