import { registerApplication, start } from 'single-spa';

// Loading functions
const loadApp1 = () => import('../app1/root-app.js');

// isActive functions
const app1IsActive = () => true;// window.location.hash.startsWith('#/app1');

// Register apps
registerApplication('app1', loadApp1, app1IsActive);

// mount applications to the DOM
start();
