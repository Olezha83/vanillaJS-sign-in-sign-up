let loginSignIn, passwordSignIn, submitSignIn

export function getSignInElems (shadow) {
  [loginSignIn, passwordSignIn, submitSignIn] = [
    'login',
    'password',
    'submit'
  ].map(id => shadow.querySelector(`#${id}`))
}

export {
  loginSignIn,
  passwordSignIn,
  submitSignIn
}