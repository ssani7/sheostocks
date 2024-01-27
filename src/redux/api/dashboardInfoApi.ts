import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dashboardInfoAPI = createApi({
	reducerPath: 'api/products',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/info' }),
	tagTypes: ['dashboardInfo'],
	endpoints: (builder) => ({
		getCardInfo: builder.query({
			query: () => '/cardInfo',
		}),
		getProductByID: builder.query({
			query: (id) => `/product/${id}`,
		}),
		getComments: builder.query({
			query: (id) => `/comment/${id}`,
			providesTags: ['dashboardInfo'],
		}),
		postComment: builder.mutation({
			query: ({ id, comment }) => ({
				url: `/comment/${id}`,
				method: 'POST',
				body: { comment },
			}),
			invalidatesTags: ['dashboardInfo'],
		}),
	}),
});

export const { useGetCardInfoQuery, useGetProductByIDQuery, useGetCommentsQuery, usePostCommentMutation } = dashboardInfoAPI;
