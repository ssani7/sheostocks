import { api } from '../../api/dashboardInfoApi';

export const puchaseAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllPurchase: builder.query({
			query: () => ({
				url: `/purchase`,
			}),
		}),
		makePurchase: builder.mutation({
			query: ({ purchaseData }) => ({
				url: `/purchase/make-purchase`,
				method: 'POST',
				body: purchaseData,
			}),
			// invalidatesTags: ['dashboardInfo'],
		}),
	}),
});

export const { useMakePurchaseMutation } = puchaseAPI;
