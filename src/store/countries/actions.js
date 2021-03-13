
const toggleDarkTheme = ({ commit }) => {
  commit('TOGGLE_DARK_MODE');
};

const setCurrentRegion = ({ commit }, val) => {
  commit('SET_USER_INPUT', '');
  commit('SET_CURRENT_REGION', val);
};

const changeRouteMode = ({ commit }, val) => {
  commit('CHANGE_ROUTE_MODE', val);
};

const setCountryList = async ({ commit }) => {
  const response = (await fetch('https://restcountries.eu/rest/v2/all')).json();

  commit('SET_COUNTRY_LIST', await response);
};

const setUserInput = ({ commit }, val) => {
  commit('SET_USER_INPUT', val);
  commit('SET_CURRENT_REGION', '');
};

export default {
  setUserInput,
  setCountryList,
  toggleDarkTheme,
  changeRouteMode,
  setCurrentRegion
};
