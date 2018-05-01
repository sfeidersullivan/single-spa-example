import { Component } from '@angular/core';
// import angularLogo from './assets/angularLogo.svg';
const angularLogo = require('./assets/angular-logo.svg');
declare function require(name: string) : string;

@Component({
  selector: 'app3',
  template: `
    <h2>
      This is App3, written in Angular.
      <img src={{logo}} />
    </h2>
  `,
})

export class App3 {
  logo = angularLogo;
}