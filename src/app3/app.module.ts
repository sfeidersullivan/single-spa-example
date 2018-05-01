import { NgModule, enableProdMode } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { App3 } from './app.component.ts';

try {
  enableProdMode();
} catch (err) {
  console.info('EnableProdMode already set')
}

@NgModule({
  declarations: [
    App3,
  ],
  imports: [BrowserModule],
  // providers: [],
  bootstrap: [App3]
})
export class App3Module { }