import { avatarErrorSignUp } from "../helpers"

export function avatarSignUpClearErrorCallback () {
  Object.assign(avatarErrorSignUp.style, {
    display: 'none'
  })
}