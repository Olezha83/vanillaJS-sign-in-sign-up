import {
  loginErrorSignUp,
  loginSignUp,
  passwordErrorSignUp,
  passwordSignUp,
  avatarErrorSignUp,
  avatarSelectSignUp,
  submitSignUp
} from "."

export function validateForm () {
  if (
    (!loginErrorSignUp.style.display && loginSignUp.value)
    &&
    (!passwordErrorSignUp.style.display && passwordSignUp.value)
    && 
    (!avatarErrorSignUp.style.display && avatarSelectSignUp.value)
  ) {
    submitSignUp.disabled = false
  }
}