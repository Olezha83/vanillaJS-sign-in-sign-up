import {
  loginErrorSignUp,
  loginSignUp,
  passwordErrorSignUp,
  passwordSignUp,
  avatarErrorSignUp,
  avatarSelectSignUp,
  submitSignUp
} from '.'

import { isLoginCheckedSignUp } from '../callbacks'

export function validateFormSignUp () {
  if (
    (!loginErrorSignUp.style.display && loginSignUp.value)
    &&
    (!passwordErrorSignUp.style.display && passwordSignUp.value)
    && 
    (!avatarErrorSignUp.style.display && avatarSelectSignUp.value)
    &&
    isLoginCheckedSignUp
  ) {
    submitSignUp.disabled = false
  }
}