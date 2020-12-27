/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';

import router from './router';

router.afterEach((to, from, next) => {
    document.title = (to.meta.title || to.meta.breadcrumb || to.meta.label || to.name || 'Loading...') + ' | Stock Manager';
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import {BootstrapVue} from 'bootstrap-vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
import filters from "./partials/filters";

Vue.use(filters);

import store from "./shared/store";

import TheContainer from "./containers/TheContainer";

Vue.prototype.$log = console.log.bind(this);
Vue.prototype.route = window.route;

import {msgBox} from "@/partials/datatable";

export default new Vue({
    router,
    store,
    render: h => h(TheContainer),
    methods: {
        msgBox
    }
}).$mount('#app');
