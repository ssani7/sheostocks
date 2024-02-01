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
		setProductFilter: (state: any, action: PayloadAction<Partial<ProductFilter>>) => {
			const payloadArr = Object.keys(action.payload);
			payloadArr.forEach((key) => (state[key] = action.payload[key as keyof ProductFilter]));
		},
		resetProductFilter: (state: any) => {
			const payloadArr = Object.keys(state);
			payloadArr.forEach((key) => {
				if (typeof state[key] === 'string') state[key] = '';
				else if (typeof state[key] === 'number') state[key] = 0;
				else state[key] = null;
			});
		},
	},
});

export const { setProductFilter, resetProductFilter } = productFilter.actions;

export default productFilter.reducer;
