import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  signup,
  current,
  logout,
  clearAuthError,
} from './auth-operaions';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
  state.isLogin = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, pending)
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isLogin = true;
      })
      .addCase(signup.rejected, rejected)
      .addCase(login.pending, pending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isLogin = true;
      })
      .addCase(login.rejected, rejected)
      .addCase(current.pending, pending)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.isLogin = true;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isLogin = false;
        state.token = '';
        // скидаємо токен
      })
      .addCase(logout.pending, pending)
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.isLogin = false;
        state.user = {};
        state.token = '';
      })
      .addCase(logout.rejected, rejected)
      .addCase(clearAuthError, state => {
        state.error = null;
      });
  },
});

export default authSlice.reducer;
