import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  reducers: {},

  
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;
