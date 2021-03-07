
const TOGGLE_DARK_MODE = state => {
  state.darkMode = !state.darkMode;
};

const SET_CURRENT_REGION = (state, val) => {
  state.currentRegion = val;
};

export default {
  TOGGLE_DARK_MODE,
  SET_CURRENT_REGION
};
