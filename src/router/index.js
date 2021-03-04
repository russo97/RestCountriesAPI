

import Vue from 'vue';
import VueRouter from 'vue-router';

import Header from '../components/Header';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Header }
];

export default new VueRouter({
  routes
});
