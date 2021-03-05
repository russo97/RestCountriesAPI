

import Vue from 'vue';
import VueRouter from 'vue-router';

import FilterArea from '../components/FilterArea';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: FilterArea }
];

export default new VueRouter({
  routes
});
