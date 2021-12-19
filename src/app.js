window._ = require('lodash');

window.$ = require('jquery');

window.Popper = require('popper.js');

require('bootstrap');

import Vue from 'vue';

// Components
Vue.component('experience-component', require('./components/ExperienceComponent.vue').default);

const app = new Vue({
    el: '#app',
});