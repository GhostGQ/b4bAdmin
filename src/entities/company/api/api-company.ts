import {apiPrivateSlice} from '@shared/api/apiPrivateSlices';

export const companyApiGetSlice = apiPrivateSlice.injectEndpoints({
  endpoints: builder => ({
    getCompanies: builder.query({
      query: () => ({
        url: `/company/`,
        method: 'GET',
      }),
      providesTags: ['Companies', 'Company'],
    }),

    getCompanyById: builder.query({
      query: (id: number) => ({
        url: `/company/${id}/`,
        method: 'GET',
      }),
      providesTags: ['Company'],
    }),

    getCompanyCategories: builder.query({
      query: () => ({
        url: `/core/business/`,
        method: 'GET',
      }),
      providesTags: ['Company'],
    }),

    // Mutations \\
    addCompany: builder.mutation({
      query: company => ({
        url: '/company/',
        method: 'POST',
        body: {
          name: company.name,
          business_ids: company.business_ids,
          logo: company.logo,
        },
      }),
      invalidatesTags: ['Companies'],
    }),

    updateCompany: builder.mutation({
      query: company => ({
        url: `/company/${company.id}/`,
        method: 'PATCH',
        body: company.data,
      }),
      invalidatesTags: ['Company'],
    }),

    deleteCompany: builder.mutation({
      query: (companyId: number) => ({
        url: `/company/${companyId}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Companies'],
    }),
  }),
});
