import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    waterDaily: [],
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