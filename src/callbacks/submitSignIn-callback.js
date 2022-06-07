import {
  congratsSignIn,
  showAvatarSignIn,
  validateFormSignIn
} from "../helpers"

export const submitSignInCallback = () => {
  if (validateFormSignIn()) {
    showAvatarSignIn()

    setTimeout(() => {
      Object.assign(congratsSignIn.style, {
        display: 'block'
      })
    }, 500)
  }
}