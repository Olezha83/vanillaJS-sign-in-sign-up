import { loginErrorSignUp } from "../helpers"

export const loginSignUpClearErrorCallback = () => {
  Object.assign(loginErrorSignUp.style, {
    display: ''
  })
}