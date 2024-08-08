import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestLogIn,
  requestLogOut,
  requestSignUp,
} from "../services/instace";

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);
      console.log("sanka");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestLogIn(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const apiLogOutUser = createAsyncThunk(
  "auth/logout",
  async (formData, thunkAPI) => {
    try {
      const data = await requestLogOut(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);


