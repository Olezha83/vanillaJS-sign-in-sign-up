let
  loginSignUp,
  loginErrorSignUp,
  passwordSignUp,
  passwordSignUpInfo,
  passwordErrorSignUp,
  avatarSelectSignUp,
  avatarPictureSignUp,
  avatarErrorSignUpIFT,
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
    avatarErrorSignUpIFT,
    submitSignUp
  ] = [
    'login',
    'login-error',
    'password',
    'password-info',
    'password-error',
    'avatar-select',
    'avatar-picture',
    'avatar-error-illegal-file-type',
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
  avatarErrorSignUpIFT,
  submitSignUp
}