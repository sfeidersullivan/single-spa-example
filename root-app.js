import { declareChildApplication, start } from 'single-spa';

// Register apps
declareChildApplication('app1', loadApp1, app1IsActive);

// mount applications to the DOM
start();

// Loading functions
const loadApp1 = () => import('./app1/app.js');

// isActive functions
const app1IsActive = () => window.location.hash.startsWith('#/app1');
