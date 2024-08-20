import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestCurrentUser,
  requestTotalUsers,
  requestUpdateUser,
  requestUploadPhoto,
} from "../services/instace";

export const apiGetCurrentUser = createAsyncThunk(
  "user/current",
  async (formData, thunkAPI) => {
    try {
      const data = await requestCurrentUser();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const apiUpdateUser = createAsyncThunk(
  "user/update",
  async (formData, thunkAPI) => {
    try {
      const data = await requestUpdateUser(formData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const apiGetTotalUsers = createAsyncThunk(
  "user/total",
  async (formData, thunkAPI) => {
    try {
      const data = await requestTotalUsers();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const apiUploadPhoto = createAsyncThunk(
  "user/upload",
  async (formData, thunkAPI) => {
    try {
      const data = await requestUploadPhoto();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);
