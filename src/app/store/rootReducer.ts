import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '@shared/slices/auth-slice';
import {apiPublicSlice} from '@shared/api/apiPublicSlice';
import {apiPrivateSlice} from '@shared/api/apiPrivateSlices';

export const rootReducer = combineReducers({
  auth: authReducer,
  [apiPublicSlice.reducerPath]: apiPublicSlice.reducer,
  [apiPrivateSlice.reducerPath]: apiPrivateSlice.reducer,
});
