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
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
import filters from "./partials/filters";

Vue.use(filters);

import store from "./shared/store";

import TheContainer from "./containers/TheContainer";

Vue.prototype.$log = console.log.bind(this);
Vue.prototype.route = window.route;



import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

Vue.use(CKEditor);
Vue.prototype.ClassicEditor = ClassicEditor;
Vue.prototype.editorConfig = {
    ckfinder: {
        uploadUrl: route('ckfinder_connector', {
            command: 'QuickUpload',
            type: 'Files',
            responseType: 'json'
        }).url(),
        filebrowserBrowseUrl: route('ckfinder_connector').url(),
        filebrowserImageBrowseUrl: route('ckfinder_browser', {type: 'Images'}).url(),
        filebrowserUploadUrl: route('ckfinder_connector', {
            command: 'QuickUpload',
            type: 'Files'
        }).url(),
        filebrowserImageUploadUrl: route('ckfinder_connector', {
            command: 'QuickUpload',
            type: 'Image'
        }).url(),
        options: {
            resourceType: 'Images'
        }
    },
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'imageUpload',
            'ckFinder',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo'
        ]
    },
};
import {msgBox} from "@/partials/datatable";

export default new Vue({
    router,
    store,
    render: h => h(TheContainer),
    methods: {
        msgBox
    }
});
