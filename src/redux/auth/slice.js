import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  user: {
    email: null,
  },
  token: null,
  isSignedIn: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  reducers: {


  },

  
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;
