export const selectUser = (state) => {
  return state.user.user;
};

export const selectIsLoading = (state) => {
  return state.user.isLoading;
};

// export const selectDailyNorma = (state) => {
//   console.log(state.user.user.dailyNorma
//   );
//   return 2200;
// };



export const selectUserCount = (state) => {
  return state.user.totalUsers;
};
