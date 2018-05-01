const jsLogo = require('./assets/javascript-logo.png');

export const bootstrap = () => Promise
  .resolve()
  .then(() => {
    let el = document.getElementById('app2');
    if (!el) {
      el = document.createElement('div');
      el.id = 'app2';
      document.body.appendChild(el);
    }
  })

export const mount = () => Promise
  .resolve()
  .then(() => {
    document.getElementById('app2').innerHTML =
      `<h2>
        This is App2, written in Javascript.
        <img id="javascript-logo" />
      </h2>`;
    document.getElementById('javascript-logo').src = jsLogo;
  })

export const unmount = () => Promise
  .resolve()
  .then(() => document.getElementById('app2').innerHTML = '')
  