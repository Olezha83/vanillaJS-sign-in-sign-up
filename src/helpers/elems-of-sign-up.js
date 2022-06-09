let
  loginSignUp,
  loginErrorSignUp,
  passwordSignUp,
  passwordSignUpInfo,
  passwordErrorSignUp,
  avatarSelectSignUp,
  avatarPictureSignUp,
  avatarErrorSignUp,
  submitSignUp,
  congratsSignUp

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
    submitSignUp,
    congratsSignUp
  ] = [
    'login',
    'login-error',
    'password',
    'password-info',
    'password-error',
    'avatar-select',
    'avatar-picture',
    'avatar-error',
    'submit',
    'congrats'
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
  submitSignUp,
  congratsSignUp
}
