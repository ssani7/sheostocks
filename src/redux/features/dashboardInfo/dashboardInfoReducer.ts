import { createSlice } from '@reduxjs/toolkit';

export interface ICardInfo {
	currentStock: number;
	totalSale: number;
	totalPurchase: number;
}

interface TopSellingInfo {
	name: string;
	value: number;
}

interface WeeklyComparisionType {
	name: string;
	sales: number;
	purchase: number;
	amt: number;
}

interface ProductStock {
	_id: string;
	name: string;
	quantity: number;
	stock_alert: number;
}

interface SaleInfo {
	_id: string;
	customer: string;
	productName: string;
	quantity: number;
	date: Date;
	status: string;
}

interface DashboardInfoState {
	cardInfo: ICardInfo;
	topSelling: TopSellingInfo[];
	weeklyComparision: WeeklyComparisionType[];
	lowStockList: ProductStock[];
	recentSales: SaleInfo[];
}

const initialState: DashboardInfoState = {
	cardInfo: {
		currentStock: 0,
		totalSale: 0,
		totalPurchase: 0,
	},
	topSelling: [],
	weeklyComparision: [],
	lowStockList: [],
	recentSales: [],
};

export const dashboardInfoSlice = createSlice({
	name: 'dashboardInfo',
	initialState,
	reducers: {},
});

// export const {} = dashboardInfoSlice.actions;

export default dashboardInfoSlice.reducer;
