import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    user: {},
    totalUsers: null,
    isLoading: false,
    isError: null,
    isLoadingAvatar: false,

};

const userSlice = createSlice({
  // Ім'я слайсу
  name: "user",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  reducers: {},
//   extraReducers: (builder) =>
//     builder
//   .addCase((state) => {
//       state;
//     }),
});

// Редюсер слайсу
export const userReducer = userSlice.reducer;
