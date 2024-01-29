import { IProduct } from './Product';

export type SaleCategory = 'daily' | 'weekly' | 'monthly' | 'yearly';

export type ISale = {
	_id: string;
	date: Date;
	customer: string;
	warehouse: 'Uttara Warehouse' | 'Mirpur Warehouse';
	product_id: string;
	sale_quantity: number;
	sale_amount: number;
	product: IProduct[];
};
