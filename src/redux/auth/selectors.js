export const selectUser = (state) => {
    console.log('state in selector: ', state.auth);
    return state.auth.user;
  };