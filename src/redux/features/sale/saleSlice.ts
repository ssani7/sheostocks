import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../types/Product';

interface SaleState {
	selected: IProduct | null;
	date: Date | null;
	customer: string;
	warehouse: string;
	sale_quantity: number;
}

const initialState: SaleState = {
	selected: null,
	date: null,
	customer: '',
	warehouse: '',
	sale_quantity: 0,
};

const saleReducer = createSlice({
	name: 'sale',
	initialState,
	reducers: {
		setSaleState: (state, action: PayloadAction<Partial<SaleState>>) => {
			state.customer = action.payload.customer || state.customer;
			state.date = action.payload.date || state.date;
			state.warehouse = action.payload.warehouse || state.warehouse;
			state.selected = action.payload.selected || state.selected;
			state.sale_quantity = action.payload.sale_quantity || state.sale_quantity;
		},
		resetSaleState: (state) => {
			state.customer = '';
			state.date = null;
			state.warehouse = '';
			state.selected = null;
			state.sale_quantity = 0;
		},
		unselectProduct: (state) => {
			state.selected = null;
		},
	},
});

export const { setSaleState, resetSaleState, unselectProduct } = saleReducer.actions;

export default saleReducer.reducer;
