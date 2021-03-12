
const isDarkMode = state => state.darkMode;

const regionSelected = state => state.currentRegion.length > 0;

const getCountryByAlpha3Code = state => alpha3Code => {
  return state.countryList.find(country => country.alpha3Code == alpha3Code);
};

export default {
  isDarkMode,
  regionSelected,
  getCountryByAlpha3Code
};
