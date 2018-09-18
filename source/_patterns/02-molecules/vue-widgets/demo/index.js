import Vue from 'vue';

// Demo twig
import twig from './vue-widgets.twig';

import VueExample2 from './vue-html-example.vue';
import VueCards from '../src/vue-cards/app.vue';

// Render Vue element from pre-existing markup in HTML
if (document.getElementById('vue-html-example-1')) {
  // Use an IIFE for "new"
  (() =>
    new Vue({
      el: '#vue-html-example-1',
      data: {
        name: '',
      },
      methods: {
        toSpace() {
          alert(this.name); // eslint-disable-line no-alert
        },
      },
    }))();
}

// Render Vue element with template provided in .vue file
if (document.getElementById('vue-html-example-2')) {
  (() =>
    new Vue({
      el: '#vue-html-example-2',
      components: { VueExample2 },
      template: '<VueExample2 />',
    }))();
}

if (document.getElementById('vue-style-example')) {
  (() =>
    new Vue({
      el: '#vue-style-example',
      components: { VueCards },
      template: '<VueCards />',
    }))();
}
export default {
  twig,
};
