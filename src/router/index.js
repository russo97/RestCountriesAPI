

import Vue from 'vue';
import VueRouter from 'vue-router';

import CountriesList from '../components/CountriesList';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: CountriesList }
];

export default new VueRouter({
  routes
});
