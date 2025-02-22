import {apiPrivateSlice} from '@shared/api/apiPrivateSlices';
import {AuthFormData} from './types';
import {CredentialsPayload} from '@shared/types/auth-types';

interface LoginResponse extends CredentialsPayload {}
interface LoginRequest extends AuthFormData {}

// Login
export const loginApiSlice = apiPrivateSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: {...credentials},
      }),
    }),
  }),
});

export const {useLoginMutation} = loginApiSlice;
