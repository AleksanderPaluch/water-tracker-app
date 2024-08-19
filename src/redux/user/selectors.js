export const selectUser = (state) => {
  return state.user.user;
};


export const selectIsRefreshing = (state) => {
  return state.user.isLoading;
};