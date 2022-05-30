import { origin } from "../configs"
import { avatarPictureSignUp, loginSignUp, passwordSignUp } from "../helpers"

export const submitSignUpCallback = () => {
  fetch(`${origin}/user/${loginSignUp.value}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: passwordSignUp.value,
      avatar: avatarPictureSignUp.src
    })
  })
}