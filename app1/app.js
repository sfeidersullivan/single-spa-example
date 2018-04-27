// single-spa will import this file
let user;

export const bootstrap = () => fetch('/api/users/0')
  .then(response => response.json())
  .then(json => user = json);

export const mount = () => Promise.resolve()
  .then(() => {
    document.getElementById('user-app').innerHTML =
      <div>
        Hello ${user.name}!
      </div>
  })

export const unmount = () => Promise.resolve()
  .then(() => document.getElementById('user-app').innerHTML = '')
  