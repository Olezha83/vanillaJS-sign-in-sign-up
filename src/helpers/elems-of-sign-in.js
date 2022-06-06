let
  loginSignIn,
  loginErrorSignIn,
  passwordSignIn,
  passwordErrorSignIn,
  avatarParagraphSignIn,
  submitSignIn,
  congratsSignIn

function getSignInElems (shadow) {
  [
    loginSignIn,
    loginErrorSignIn,
    passwordSignIn,
    passwordErrorSignIn,
    avatarParagraphSignIn,
    submitSignIn,
    congratsSignIn
  ] = [
    'login',
    'login-error',
    'password',
    'password-error',
    'avatar-paragraph',
    'submit',
    'congrats'
  ].map(id => shadow.querySelector(`#${id}`))
}

export {
  loginSignIn,
  loginErrorSignIn,
  passwordSignIn,
  passwordErrorSignIn,
  avatarParagraphSignIn,
  submitSignIn,
  congratsSignIn,
  getSignInElems
}