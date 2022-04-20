let loginSignUp, passwordSignUp, avatarSignUp, submitSignUp

export function getSignUpElems (shadow) {
  [loginSignUp, passwordSignUp, avatarSignUp, submitSignUp] = [
    'login',
    'password',
    'avatar',
    'submit'
  ].map(id => shadow.querySelector(`#${id}`))
}

export {
  loginSignUp,
  passwordSignUp,
  avatarSignUp,
  submitSignUp
}