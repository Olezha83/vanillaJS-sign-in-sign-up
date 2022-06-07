import {
  loginErrorSignIn,
  loginSignIn,
  passwordErrorSignIn,
  passwordSignIn
} from '.'

import { isLoginCheckedSignIn } from '../callbacks'

export function validateFormSignIn () {
  if (
    (!loginErrorSignIn.style.display && loginSignIn.value)
    &&
    (!passwordErrorSignIn.style.display && passwordSignIn.value)
    &&
    isLoginCheckedSignIn
  ) {
    return true
  }
}