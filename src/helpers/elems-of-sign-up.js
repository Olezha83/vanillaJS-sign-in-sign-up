let
  loginSignUp,
  loginErrorSignUp,
  passwordSignUp,
  passwordSignUpInfo,
  passwordErrorSignUp,
  avatarSelectSignUp,
  avatarPictureSignUp,
  avatarErrorSignUpNF,
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
    avatarErrorSignUpNF,
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
    'avatar-error-no-file',
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
  avatarErrorSignUpNF,
  avatarErrorSignUpIFT,
  submitSignUp
}