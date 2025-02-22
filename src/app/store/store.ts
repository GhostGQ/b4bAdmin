import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {apiPrivateSlice} from '@shared/api/apiPrivateSlices';
import {apiPublicSlice} from '@shared/api/apiPublicSlice';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      apiPrivateSlice.middleware,
      apiPublicSlice.middleware,
    ]), // Добавляем middleware API
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
