
const TOGGLE_DARK_MODE = state => {
  state.darkMode = !state.darkMode;
};

const CHANGE_ROUTE_MODE = (state, mode) => {
  state.darkMode = mode;
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
  CHANGE_ROUTE_MODE,
  SET_CURRENT_REGION
};
