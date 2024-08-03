export const selectWaterDaily = (state) => {
    console.log('state in selector: ', state.water);
    return state.water.waterDaily;
  };