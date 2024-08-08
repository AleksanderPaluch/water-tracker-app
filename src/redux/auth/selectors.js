export const selectIsSignedIn = (state) => {
  return state.auth.isSignedIn;
};


export const selectToken = (state) => {
  state.auth.token;
};
