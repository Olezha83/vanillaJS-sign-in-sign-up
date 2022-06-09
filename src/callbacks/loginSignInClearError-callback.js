import { loginErrorSignIn } from "../helpers"

export const loginSignInClearErrorCallback = () => {
  Object.assign(loginErrorSignIn.style, {
    display: ''
  })
}
