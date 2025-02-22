import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {removeTokensFromCookies, setTokenToCookie} from '@shared/lib';
import {removeUserCookie} from '@shared/lib/cookies/userCookies';
import {AuthState, CredentialsPayload} from '@shared/types/auth-types';

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state: AuthState,
      action: PayloadAction<CredentialsPayload>
    ) => {
      const {payload} = action;
      state.token = payload.access;
      setTokenToCookie(payload.access, payload.refresh ?? '');
    },
    logOut: (state: AuthState) => {
      state.token = null;
      removeUserCookie();
      removeTokensFromCookies();
    },
  },
});

export const {setCredentials, logOut} = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state: {auth: AuthState}) => state.auth.token;
