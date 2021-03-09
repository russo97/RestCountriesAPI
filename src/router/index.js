

import Vue from 'vue';
import VueRouter from 'vue-router';

import CountriesList from '../components/CountriesList';
import CountryDetails from '../components/CountryDetails';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: CountriesList },
  { path: '/country/:numericCode', component: CountryDetails }
];

export default new VueRouter({
  routes
});
