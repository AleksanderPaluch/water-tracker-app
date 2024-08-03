import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  user: {
    name: "alex",
    email: "BBB@bb.pl",
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

  reducers: {

    updateUser(state, action) {
      state.user = action.payload;
    },
  },

  
});
export const { updateUser, updateToken, updateLoginStatus, updateRefreshingStatus } = authSlice.actions;
// Редюсер слайсу
export const authReducer = authSlice.reducer;
