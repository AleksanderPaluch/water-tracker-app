import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestCurrentUser } from "../services/instace";



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

