import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddWater,
  requestDeleteWater,
  requestEditWater,
  requestGetWater,
} from "../services/water";

export const apiGetDailyWater = createAsyncThunk(
  "water/getWater",
  async (formData, thunkAPI) => {
    try {
    
      const data = await requestGetWater(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const apiAddWater = createAsyncThunk(
  "water/addWater",
  async (formData, thunkAPI) => {
    try {
      console.log(formData);
     
      const data = await requestAddWater(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
export const apiEditWater = createAsyncThunk(
  "water/editWater",
  async (formData, thunkAPI) => {
    try {
      console.log(formData);
      const data = await requestEditWater(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
export const apiDeleteWater = createAsyncThunk(
  "water/removeWater",
  async (id, thunkAPI) => {
    try {
      const data = await requestDeleteWater(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
