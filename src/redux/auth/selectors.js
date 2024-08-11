export const selectIsSignedIn = (state) => {
  return state.auth.isSignedIn;
};


export const selectToken = (state) => {
  state.auth.token;
};
export const selectError = (state) => {

  return state.auth.isError;
};

export const selectIsLoading = (state) => {
  return state.auth.isLoading;
}