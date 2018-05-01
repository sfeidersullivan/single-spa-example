import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import app4 from './app4.component.js';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: app4
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];