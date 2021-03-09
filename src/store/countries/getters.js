
const isDarkMode = state => state.darkMode;

const regionSelected = state => state.currentRegion.length > 0;

const getCountryByNumericCode = state => numCode => {
  return state.countryList.filter(country => country.numericCode == numCode)[0];
};

export default {
  isDarkMode,
  regionSelected,
  getCountryByNumericCode
};
