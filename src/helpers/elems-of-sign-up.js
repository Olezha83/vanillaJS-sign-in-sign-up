let loginSignUp, loginErrorSignUp, passwordSignUp, avatarSignUp, submitSignUp

export function getSignUpElems (shadow) {
  [loginSignUp, loginErrorSignUp, passwordSignUp, avatarSignUp, submitSignUp] = [
    'login',
    'login-error',
    'password',
    'avatar',
    'submit'
  ].map(id => shadow.querySelector(`#${id}`))
}

export {
  loginSignUp,
  loginErrorSignUp,
  passwordSignUp,
  avatarSignUp,
  submitSignUp
}