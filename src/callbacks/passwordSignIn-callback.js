import {
  passwordErrorSignIn,
  validatePasswordSignIn
} from "../helpers"

export const passwordSignInCallback = (event) => {
  const passwordCheck = validatePasswordSignIn(event.target.value)

  if (!passwordCheck) {
    Object.assign(passwordErrorSignIn.style, {
      display: 'block'
    })
  }
}