
const isDarkMode = state => state.darkMode;

const regionSelected = state => state.currentRegion.length > 0;

export default {
  isDarkMode,
  regionSelected
};
