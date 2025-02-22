import {API_URL} from '@app/config/env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiPublicSlice = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: () => ({}),
});
