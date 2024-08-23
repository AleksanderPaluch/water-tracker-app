import { createSlice } from "@reduxjs/toolkit";
import {
  apiAddWater,
  apiDeleteWater,
  apiEditWater,
  apiGetDailyWater,
} from "./operations";

const INITIAL_STATE = {
  waterDaily: [],
  waterMonthly: [],
  waterWeekly: [],
  isLoading: false,
  isError: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  (state.isLoading = false), (state.error = action.payload);
};

const waterSlice = createSlice({
  // Ім'я слайсу
  name: "water",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  reducers: {},
  extraReducers: (builder) =>
    builder

      // GET WATER DAILY //

      .addCase(apiGetDailyWater.pending, handlePending)
      .addCase(apiGetDailyWater.fulfilled, (state, action) => {
        state.waterDaily = action.payload.waterDaily;
        (state.isError = false), (state.isLoading = false);
      })
      .addCase(apiGetDailyWater.rejected, handleRejected)

      // ADD WATER  //

      .addCase(apiAddWater.pending, handlePending)
      .addCase(apiAddWater.fulfilled, (state, action) => {
        (state.isError = false), (state.isLoading = false);
      })
      .addCase(apiAddWater.rejected, handleRejected)

      // EDIT WATER  //

      .addCase(apiEditWater.pending, handlePending)
      .addCase(apiEditWater.fulfilled, (state, action) => {
        (state.isError = false), (state.isLoading = false);
      })
      .addCase(apiEditWater.rejected, handleRejected)

      // REMOVE WATER  //

      .addCase(apiDeleteWater.pending, handlePending)
      .addCase(apiDeleteWater.fulfilled, (state, action) => {
        (state.isError = false), (state.isLoading = false);
      })
      .addCase(apiDeleteWater.rejected, handleRejected),
});

// Редюсер слайсу
export const waterReducer = waterSlice.reducer;
