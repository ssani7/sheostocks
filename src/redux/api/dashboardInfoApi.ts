import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
	tagTypes: ['dashboardInfo', 'productsList'],
	endpoints: (builder) => ({
		getCardInfo: builder.query({
			query: () => '/info/cardInfo',
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

export const { useGetCardInfoQuery, useGetCommentsQuery, usePostCommentMutation } = api;
