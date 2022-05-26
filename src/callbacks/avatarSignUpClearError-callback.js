import { avatarErrorSignUpIFT } from "../helpers"

export function avatarSignUpClearErrorCallback () {
  Object.assign(avatarErrorSignUpIFT.style, {
    display: 'none'
  })
}