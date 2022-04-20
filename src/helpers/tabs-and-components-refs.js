let signUpElement, signInElement, signUpTab, signInTab 

export function getTabs (shadow) {
  [signUpTab, signInTab] = [
    'sign-up-tab',
    'sign-in-tab'
  ].map(id => shadow.querySelector(`#${id}`))
}

export function getElems () {
  [signUpElement, signInElement] = [
    'sign-up',
    'sign-in'
  ].map(elem => document.getElementsByTagName(elem)[0])
}

export {
  signUpElement,
  signInElement,
  signUpTab,
  signInTab,
}