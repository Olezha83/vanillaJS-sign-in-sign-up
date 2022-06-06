import { passwordErrorSignIn } from "../helpers"

export const passwordSignInOnFocusCallback = () => {
  Object.assign(passwordErrorSignIn.style, {
    display: ''
  })
}