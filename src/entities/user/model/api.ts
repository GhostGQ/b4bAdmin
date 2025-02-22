import {IUser} from '@entities/user/model/types';
import {apiPrivateSlice} from '../../../shared/api/apiPrivateSlices';

const apiUserSlice = apiPrivateSlice.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<IUser, null>({
      query: () => ({
        url: '/auth/user/me/',
        method: 'GET',
      }),
    }),

    updateUserMe: builder.mutation({
      query: user => ({
        url: '/auth/user/me/',
        method: 'PATCH',
        body: {...user},
      }),
    }),
  }),
});

export const {useGetMeQuery, useLazyGetMeQuery, useUpdateUserMeMutation} =
  apiUserSlice;
