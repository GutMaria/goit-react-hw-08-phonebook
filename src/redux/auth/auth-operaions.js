import { createAsyncThunk } from '@reduxjs/toolkit';
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
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await requestLogin(body);
      console.log(data);
      return data;
    } catch (error) {
      console.log('Error', error);
      console.log('Error.message', error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      console.log('Витягаємо токен', auth.token);
      const { data } = await currentRequest(auth.token);
      console.log('Робимо запит в операціях, відповідь:', data);
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
      console.log('Зробила запит logout в operations:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
