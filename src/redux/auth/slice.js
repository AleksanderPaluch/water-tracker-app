import { createSlice } from "@reduxjs/toolkit";
import { apiLoginUser, apiLogOutUser, apiRegisterUser } from "./operations";

const INITIAL_STATE = {
  user: {
    email: null,
  },
  token: null,
  isSignedIn: false,
  isSignedUp: false,
  isLoading: false,
  isError: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  (state.isLoading = false), (state.error = action.payload);
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  reducers: {},
  extraReducers: (builder) =>
    builder

      // REGISTER USER //

      .addCase(apiRegisterUser.pending, handlePending)
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.user = action.payload.user;

        state.isSignedUp = true;
        state.isLoading = false;
      })
      .addCase(apiRegisterUser.rejected, handleRejected)

      // LOGIN USER //

      .addCase(apiLoginUser.pending, handlePending)
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
        state.isLoading = false;
      })
      .addCase(apiLoginUser.rejected, handleRejected)

      // LOG OUT USER //

      .addCase(apiLogOutUser.pending, handlePending)
      .addCase(apiLogOutUser.fulfilled, (state) => {
        localStorage.removeItem("token");
        state.user = INITIAL_STATE.user;
        state.token = null;
        state.isSignedIn = false;
        state.isLoading = false;
      })
      .addCase(apiLogOutUser.rejected, handleRejected),
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;
