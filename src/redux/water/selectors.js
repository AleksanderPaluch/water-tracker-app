export const selectWaterDaily = (state) => {
    console.log('state in selector: ', state);
    return state.water.waterDaily;
  };