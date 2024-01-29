import { api } from '../../api/dashboardInfoApi';

export const productsAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => '/products',
			providesTags: ['productsList'],
		}),
		getProductsByFilter: builder.query({
			query: ({ name, brand, price, model, style, color, material }) => `/products/filter?name=${name}&brand=${brand}&price=${price}&model=${model}&style=${style}&color=${color}&material=${material}`,
			providesTags: ['productsList'],
		}),
		getProductByID: builder.query({
			query: (id) => `/product/${id}`,
		}),
		deleteProduct: builder.mutation({
			query: (id) => ({
				url: `/products/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['productsList'],
		}),
		searchProduct: builder.query({
			query: (name) => `/search?name=${name}`,
		}),
	}),
});

export const { useGetProductsQuery, useGetProductsByFilterQuery, useSearchProductQuery, useDeleteProductMutation } = productsAPI;
