
const TOGGLE_DARK_MODE = state => {
  state.darkMode = !state.darkMode;
};

const SET_CURRENT_REGION = (state, val) => {
  state.currentRegion = val;
};

const SET_COUNTRY_LIST = (state, countriesArray) => {
  state.countryList = countriesArray;
}

export default {
  TOGGLE_DARK_MODE,
  SET_COUNTRY_LIST,
  SET_CURRENT_REGION
};
