import { api } from './dashboardInfoApi';

export const saleAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getRecentSales: builder.query({
			query: () => '/sale/recent-sales',
		}),
		getBestSelling: builder.query({
			query: () => '/sale/best-selling',
		}),
		getSaleByCategory: builder.query({
			query: (category) => `/sale/${category}`,
		}),
		makeSale: builder.mutation({
			query: ({ saleData }) => ({
				url: `/sale/make-sale`,
				method: 'POST',
				body: { saleData },
			}),
			// invalidatesTags: ['dashboardInfo'],
		}),
	}),
});

export const { useGetRecentSalesQuery, useMakeSaleMutation, useGetSaleByCategoryQuery, useGetBestSellingQuery } = saleAPI;
