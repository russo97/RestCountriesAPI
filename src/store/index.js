
import Vue from 'vue';
import Vuex from 'vuex';

import Countries from './countries';

Vue.use(Vuex);

const modules = {
  Countries
};

export default new Vuex.Store({ modules });
