import { createSlice } from "@reduxjs/toolkit";

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

const waterSlice = createSlice({
  // Ім'я слайсу
  name: "water",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  reducers: {},
});

// Редюсер слайсу
export const waterReducer = waterSlice.reducer;
