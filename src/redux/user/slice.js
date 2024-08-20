import { createSlice } from "@reduxjs/toolkit";
import {
  apiGetCurrentUser,
  apiUpdateUser,
  apiGetTotalUsers,
} from "./operations";

const INITIAL_STATE = {
  user: {
    email: null,
    name: null,
    gender: null,
    weight: null,
    timeActivity: null,
    dailyNorma: null,
    avatarURL: null,
  },
  totalUsers: null,
  isLoading: false,
  isError: null,
  isLoadingAvatar: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state) => {
  (state.isLoading = false), (state.isError = true);
};

const userSlice = createSlice({
  // Ім'я слайсу
  name: "user",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  reducers: {
    logOutUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder

      // GET CURRENT USER //

      .addCase(apiGetCurrentUser.pending, handlePending)
      .addCase(apiGetCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isError = false;

        state.isLoading = false;
      })
      .addCase(apiGetCurrentUser.rejected, handleRejected)

      // UPDATE USER //

      .addCase(apiUpdateUser.pending, handlePending)
      .addCase(apiUpdateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(apiUpdateUser.rejected, handleRejected)
      // GET USER COUNT //

      .addCase(apiGetTotalUsers.pending, handlePending)
      .addCase(apiGetTotalUsers.fulfilled, (state, action) => {
        state.totalUsers = action.payload.totalUsers;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(apiGetTotalUsers.rejected, handleRejected),
});
export const { logOutUser } = userSlice.actions;
// Редюсер слайсу
export const userReducer = userSlice.reducer;
