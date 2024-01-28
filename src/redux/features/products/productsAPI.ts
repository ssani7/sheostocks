import { api } from '../../api/dashboardInfoApi';

export const productsAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => '/products',
		}),
		getProductByID: builder.query({
			query: (id) => `/product/${id}`,
		}),
		searchProduct: builder.query({
			query: (name) => `/search?name=${name}`,
		}),
	}),
});

export const { useGetProductsQuery, useSearchProductQuery } = productsAPI;
