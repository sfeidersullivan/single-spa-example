import Vue from 'vue';
import vueLogo from './assets/vue-logo.png';

export default {
  el: '#app4',
  data: {
    vueLogo
  },
  template: `
    <div id="app4">
      <h2>
        This is App4, written in Vue
        <img v-bind:src="vueLogo" >
      </h2>
    </div>
  `
} 