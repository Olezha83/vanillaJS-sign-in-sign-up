let
  loginSignIn,
  loginErrorSignIn,
  passwordSignIn,
  passwordErrorSignIn,
  submitSignIn,
  congratsSignIn

function getSignInElems (shadow) {
  [
    loginSignIn,
    loginErrorSignIn,
    passwordSignIn,
    passwordErrorSignIn,
    submitSignIn,
    congratsSignIn
  ] = [
    'login',
    'login-error',
    'password',
    'password-error',
    'submit',
    'congrats'
  ].map(id => shadow.querySelector(`#${id}`))
}

export {
  loginSignIn,
  loginErrorSignIn,
  passwordSignIn,
  passwordErrorSignIn,
  submitSignIn,
  congratsSignIn,
  getSignInElems
}