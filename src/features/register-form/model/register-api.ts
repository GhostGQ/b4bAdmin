import {apiPublicSlice} from '@shared/api/apiPublicSlice';
import {IRegisterFormData, ISetPass, IVerify} from './types';
import {ITokens} from '@shared/types/auth-types';
import {IUser} from '@entities/user/model/types';

interface IRegisterRequest extends IRegisterFormData {}
interface ISetPassResponse extends ITokens {
  user: IUser;
}

// Register
export const registerApiSlice = apiPublicSlice.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<Object, IRegisterRequest>({
      query: credentials => ({
        url: '/auth/signup',
        method: 'POST',
        params: {method: credentials.params},
        body: {...credentials.data},
      }),
    }),

    verifyRegistration: builder.mutation<Object, IVerify>({
      query: credentials => ({
        url: '/auth/verify',
        method: 'POST',
        params: {method: credentials.params},
        body: {...credentials.data},
      }),
    }),

    setPassword: builder.mutation<ISetPassResponse, ISetPass>({
      query: credentials => ({
        url: '/auth/set_password',
        method: 'POST',
        body: {...credentials},
      }),
    }),

    refreshToken: builder.mutation({
      query: credentials => ({
        url: '/auth/refresh_token',
        method: 'POST',
        body: {...credentials},
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyRegistrationMutation,
  useSetPasswordMutation,
  useRefreshTokenMutation,
} = registerApiSlice;
