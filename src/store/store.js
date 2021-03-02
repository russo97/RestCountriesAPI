import Vue from 'vue';
import Vuex from 'vuex';

import * as state from './state/state';
import * as getters from './getters/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters
});
