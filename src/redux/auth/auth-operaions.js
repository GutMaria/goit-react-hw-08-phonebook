import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import {
  requestSignUp,
  requestLogin,
  currentRequest,
  logoutRequest,
} from '../../api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await requestSignUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await requestLogin(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { data } = await currentRequest(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await logoutRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const clearAuthError = createAction('auth/clearError');
