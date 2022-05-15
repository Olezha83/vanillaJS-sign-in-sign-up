let
  loginSignUp,
  loginErrorSignUp,
  passwordSignUp,
  passwordSignUpInfo,
  passwordErrorSignUp,
  avatarSignUp,
  submitSignUp

export function getSignUpElems (shadow) {
  [
    loginSignUp,
    loginErrorSignUp,
    passwordSignUp,
    passwordSignUpInfo,
    passwordErrorSignUp,
    avatarSignUp,
    submitSignUp
  ] = [
    'login',
    'login-error',
    'password',
    'password-info',
    'password-error',
    'avatar',
    'submit'
  ].map(id => shadow.querySelector(`#${id}`))
}

export {
  loginSignUp,
  loginErrorSignUp,
  passwordSignUp,
  passwordSignUpInfo,
  passwordErrorSignUp,
  avatarSignUp,
  submitSignUp
}