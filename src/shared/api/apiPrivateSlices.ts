import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  QueryReturnValue,
} from '@reduxjs/toolkit/query/react';
import {getAccessToken, getRefreshToken} from '@shared/lib';
import {getUserCookie} from '@shared/lib/cookies/userCookies';
import {logOut, setCredentials} from '@shared/slices/auth-slice';
import {API_URL} from '@app/config/env';

// Типизация запроса на обновление токена
interface RefreshTokenResponse {
  access: string;
  refresh: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: headers => {
    const token = getAccessToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, {}>> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log('Sending refresh token');

    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      console.error('No refresh token found, logging out...');
      api.dispatch(logOut());
      return result;
    }

    // Запрос на обновление токена
    const refreshResult = await baseQuery(
      {
        url: '/auth/refresh_token',
        method: 'POST',
        body: {refresh: refreshToken},
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const currentUser = getUserCookie();

      if (!currentUser) {
        console.error('User data not found, logging out...');
        api.dispatch(logOut());
        return result;
      }
      const {access, refresh} = refreshResult.data as RefreshTokenResponse;
      api.dispatch(setCredentials({access: access, refresh: refresh}));

      // Повторный запрос после обновления токена
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.error('Failed to refresh token, logging out...');
      api.dispatch(logOut());
    }
  }

  return result;
};

// Создание API
export const apiPrivateSlice = createApi({
  reducerPath: 'privateApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
