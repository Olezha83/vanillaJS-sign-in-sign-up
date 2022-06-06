import {
  avatarParagraphSignIn,
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

  if (passwordCheck) {
    Object.assign(avatarParagraphSignIn.style, {
      display: 'block'
    })

    const avatarPicture = document.createElement('img')
    avatarParagraphSignIn.insertAdjacentElement('afterend', avatarPicture)
    avatarPicture.setAttribute('id', 'avatar-picture')
    avatarPicture.src = localStorage.avatar
  }
}