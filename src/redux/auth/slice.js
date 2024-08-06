import { createSlice } from "@reduxjs/toolkit";
import { apiRegisterUser } from "./operations";

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

  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(apiRegisterUser.rejected, (state) => {
        state.isLoggedIn = false;
      }),
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;
