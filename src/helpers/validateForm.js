import {
  loginErrorSignUp,
  loginSignUp,
  passwordErrorSignUp,
  passwordSignUp,
  avatarErrorSignUp,
  avatarSelectSignUp,
  submitSignUp
} from '.'

import { isLoginChecked } from '../callbacks'

export function validateForm () {
  if (
    (!loginErrorSignUp.style.display && loginSignUp.value)
    &&
    (!passwordErrorSignUp.style.display && passwordSignUp.value)
    && 
    (!avatarErrorSignUp.style.display && avatarSelectSignUp.value)
    &&
    isLoginChecked
  ) {
    submitSignUp.disabsled = false
  }
}