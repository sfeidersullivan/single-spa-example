import { registerApplication, start } from 'single-spa';

// Loading functions
const loadApp1 = () => import('../app1/single-spa-loader.js');
const loadApp2 = () => import('../app2/single-spa-loader.js');
const loadApp3 = () => import('../app3/single-spa-loader.js');
const loadApp4 = () => import('../app4/single-spa-loader.js');

// isActive functions
const app1IsActive = () => true;// window.location.hash.startsWith('#/app1');
const app2IsActive = () => true;// window.location.hash.startsWith('#/app1');
const app3IsActive = () => true;// window.location.hash.startsWith('#/app1');
const app4IsActive = () => true;// window.location.hash.startsWith('#/app1');

// Register apps
registerApplication('app1', loadApp1, app1IsActive);
registerApplication('app2', loadApp2, app2IsActive);
registerApplication('app3', loadApp3, app3IsActive);
registerApplication('app4', loadApp4, app4IsActive);

// mount applications to the DOM
start();
