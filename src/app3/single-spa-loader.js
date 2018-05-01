import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import singleSpaAngular from 'single-spa-angular2';
import { App3Module } from './app.module.ts';

const ngLifecycles = singleSpaAngular({
	domElementGetter,
	mainModule: App3Module,
	angularPlatform: platformBrowserDynamic(),
	template: `<app3/>`,
})

export const bootstrap = [
	ngLifecycles.bootstrap,
];

export const mount = [
	ngLifecycles.mount,
];

export const unmount = [
	ngLifecycles.unmount,
];

function domElementGetter() {
	let el = document.getElementById('app3');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app3';
    document.body.appendChild(el);
  }

  return el;
}
