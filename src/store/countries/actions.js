
const toggleDarkTheme = ({ commit }) => {
  commit('TOGGLE_DARK_MODE');
};

const setCurrentRegion = ({ commit }, val) => {
  commit('SET_CURRENT_REGION', val);
};

export default {
  toggleDarkTheme,
  setCurrentRegion
};
