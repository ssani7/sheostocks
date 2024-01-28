import { api } from '../../api/dashboardInfoApi';

export const userAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getUserInfo: builder.query({
			query: (email) => ({
				url: `/auth/userInfo/${email}`,
			}),
		}),
		loginUser: builder.mutation({
			query: ({ userData }) => ({
				url: `/auth/login`,
				method: 'POST',
				body: userData,
			}),
			// invalidatesTags: ['dashboardInfo'],
		}),
		registerUser: builder.mutation({
			query: ({ userData }) => ({
				url: `/auth/register`,
				method: 'POST',
				body: userData,
			}),
			// invalidatesTags: ['dashboardInfo'],
		}),
	}),
});

export const { useRegisterUserMutation, useLoginUserMutation, useGetUserInfoQuery } = userAPI;
