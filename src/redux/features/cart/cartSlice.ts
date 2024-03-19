import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Product {
	_id: string;
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
	stock: number;
}

interface CartState {
	products: Product[];
}

const initialState: CartState = {
	products: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state: CartState, action: PayloadAction<Product>) => {
			let newProduct = action.payload;
			// resassigning quantity beacause old quantity refers to product stock
			const oldProduct = state.products.find((p) => p._id === newProduct._id);

			if (!oldProduct) {
				newProduct = { ...newProduct, quantity: 1 };
				state.products.push(newProduct);
			} else {
				oldProduct.quantity = oldProduct.quantity + 1;
			}
		},
		removeFromCart: (state: CartState, action: PayloadAction<string>) => {
			const product_id = action.payload;
			// resassigning quantity beacause old quantity refers to product stock
			const newProducts = state.products.filter((p) => p._id !== product_id);

			state.products = newProducts;
		},
		increaseQuantity: (state: CartState, action: PayloadAction<string>) => {
			const product_id = action.payload;
			const oldProduct = state.products.find((p) => p._id === product_id);

			if (oldProduct && oldProduct.quantity < oldProduct.stock) {
				oldProduct.quantity = oldProduct.quantity + 1;
			}
		},
		decreaseQuantity: (state: CartState, action: PayloadAction<string>) => {
			const product_id = action.payload;
			const oldProduct = state.products.find((p) => p._id === product_id);

			if (oldProduct && oldProduct.quantity > 1) {
				oldProduct.quantity = oldProduct.quantity - 1;
			}
		},
	},
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
