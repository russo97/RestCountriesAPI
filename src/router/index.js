

import Vue from 'vue';
import VueRouter from 'vue-router';

import NotFound from '../components/404';
import CountriesList from '../components/CountriesList';
import CountryDetails from '../components/CountryDetails';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: CountriesList },
  { path: '/country/:numericCode', component: CountryDetails },
  { path: '*', component: NotFound }
];

export default new VueRouter({
  routes,
  mode: 'history'
});
