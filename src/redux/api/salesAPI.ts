import { api } from './dashboardInfoApi';

export const saleAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getRecentSales: builder.query({
			query: () => '/sale/recent-sales',
			providesTags: ['salesInfo'],
		}),
		getBestSelling: builder.query({
			query: () => '/sale/best-selling',
			providesTags: ['salesInfo'],
		}),
		getSaleByCategory: builder.query({
			query: (category) => `/sale/${category}`,
			providesTags: ['salesInfo'],
		}),
		makeSale: builder.mutation({
			query: ({ saleData }) => ({
				url: `/sale/make-sale`,
				method: 'POST',
				body: { saleData },
			}),
			invalidatesTags: ['salesInfo', 'productsList'],
		}),
	}),
});

export const { useGetRecentSalesQuery, useMakeSaleMutation, useGetSaleByCategoryQuery, useGetBestSellingQuery } = saleAPI;
