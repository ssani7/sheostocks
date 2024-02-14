import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../config';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_SERVER_URL,
		prepareHeaders: (header) => {
			const token = config.api_config;
			if (token) header.set('Authorization', token);
		},
	}),
	tagTypes: ['dashboardInfo', 'productsList', 'userInfo', 'salesInfo'],
	endpoints: (builder) => ({
		getCardInfo: builder.query({
			query: () => '/info/cardInfo',
		}),
	}),
});

export const { useGetCardInfoQuery } = api;
