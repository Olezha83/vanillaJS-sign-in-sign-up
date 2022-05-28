import { avatarErrorSignUp, validateForm } from "../helpers";

export function avatarSignUpCallback (file, picture) {
  if (file.type.indexOf('image')) {
    Object.assign(avatarErrorSignUp.style, {
      display: 'block'
    })
  }

  const reader = new FileReader

  reader.onload = event => {
    if (!file.type.indexOf('image')) {
      picture.src = event.target.result
    }
  }

  reader.readAsDataURL(file)

  validateForm()
}