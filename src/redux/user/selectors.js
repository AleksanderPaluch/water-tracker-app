export const selectUser = (state) => {
  return state.user.user;
};

export const selectIsLoading = (state) => {
  return state.user.isLoading;
};

export const selectDailyNorma = (state) => {
  return state.user.user.dailyNorma;
};



export const selectUserCount = (state) => {
  return state.user.totalUsers;
};
