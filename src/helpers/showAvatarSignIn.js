import { avatarParagraphSignIn } from "."

export function showAvatarSignIn () {
  Object.assign(avatarParagraphSignIn.style, {
    display: 'block'
  })

  const avatarPicture = document.createElement('img')
  avatarParagraphSignIn.insertAdjacentElement('afterend', avatarPicture)
  avatarPicture.setAttribute('id', 'avatar-picture')
  avatarPicture.setAttribute('alt', 'user avatar')
  avatarPicture.src = localStorage.avatar
}