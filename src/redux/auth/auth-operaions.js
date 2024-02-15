import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestSignUp, requestLogin } from '../../api/auth-api';

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
