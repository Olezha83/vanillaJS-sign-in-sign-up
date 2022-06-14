import {
  congratsSignIn,
  showAvatarSignIn,
  validateFormSignIn
} from "../helpers"

export const submitSignInCallback = () => {
  if (validateFormSignIn()) {
    setTimeout(() => {
      showAvatarSignIn()
    }, 300)

    setTimeout(() => {
      Object.assign(congratsSignIn.style, {
        display: 'block'
      })
    }, 600)
  }
}
