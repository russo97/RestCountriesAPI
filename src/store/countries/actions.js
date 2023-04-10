
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
  const response = await fetch('https://restcountries.eu/v3.1/all');

  const data = await response.json();

  commit('SET_COUNTRY_LIST', data);
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
