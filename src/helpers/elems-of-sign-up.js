let
  loginSignUp,
  loginErrorSignUp,
  passwordSignUp,
  passwordSignUpInfo,
  passwordErrorSignUp,
  avatarSelectSignUp,
  avatarPictureSignUp,
  avatarErrorSignUp,
  submitSignUp

export function getSignUpElems (shadow) {
  [
    loginSignUp,
    loginErrorSignUp,
    passwordSignUp,
    passwordSignUpInfo,
    passwordErrorSignUp,
    avatarSelectSignUp,
    avatarPictureSignUp,
    avatarErrorSignUp,
    submitSignUp
  ] = [
    'login',
    'login-error',
    'password',
    'password-info',
    'password-error',
    'avatar-select',
    'avatar-picture',
    'avatar-error',
    'submit'
  ].map(id => shadow.querySelector(`#${id}`))
}

export {
  loginSignUp,
  loginErrorSignUp,
  passwordSignUp,
  passwordSignUpInfo,
  passwordErrorSignUp,
  avatarSelectSignUp,
  avatarPictureSignUp,
  avatarErrorSignUp,
  submitSignUp
}