import { passwordErrorSignIn } from "../helpers"

export const passwordSignInClearErrorCallback = () => {
  Object.assign(passwordErrorSignIn.style, {
    display: ''
  })
}
