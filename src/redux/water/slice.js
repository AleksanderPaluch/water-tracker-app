import { createSlice } from "@reduxjs/toolkit";
import {
  apiAddWater,
  apiDeleteWater,
  apiEditWater,
  apiGetWater,
} from "./operations";

const INITIAL_STATE = {
  waterDaily: [
    { id: 1, time: "07:00", amount: 500 },
    { id: 2, time: "08:00", amount: 100 },
    { id: 3, time: "09:00", amount: 200 },
    { id: 4, time: "07:00", amount: 500 },
    { id: 5, time: "08:00", amount: 100 },
    { id: 6, time: "09:00", amount: 200 },
  ],
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

      .addCase(apiGetWater.pending, handlePending)
      .addCase(apiGetWater.fulfilled, (state, action) => {
        // state.waterDaily = action.payload.waterDaily;
        (state.isError = false), (state.isLoading = false);
      })
      .addCase(apiGetWater.rejected, handleRejected)

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
