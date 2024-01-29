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
			query: (id) => `/products/${id}`,
		}),
		deleteProduct: builder.mutation({
			query: (id) => ({
				url: `/products/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['productsList'],
		}),
		getLowStockProducts: builder.query({
			query: () => `/products/low-stock`,
		}),
		updateProduct: builder.mutation({
			query: ({ productData }) => ({
				url: `/products/${productData._id}`,
				method: 'PUT',
				body: productData,
			}),
			// invalidatesTags: ['dashboardInfo'],
		}),
	}),
});

export const { useGetProductByIDQuery, useGetProductsQuery, useGetProductsByFilterQuery, useUpdateProductMutation, useGetLowStockProductsQuery, useDeleteProductMutation } = productsAPI;
