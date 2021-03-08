
const toggleDarkTheme = ({ commit }) => {
  commit('TOGGLE_DARK_MODE');
};

const setCurrentRegion = ({ commit }, val) => {
  commit('SET_CURRENT_REGION', val);
};

const setCountryList = async ({ commit }) => {
  const response = (await fetch('https://restcountries.eu/rest/v2/all')).json();

  commit('SET_COUNTRY_LIST', await response);
};

export default {
  setCountryList,
  toggleDarkTheme,
  setCurrentRegion
};
