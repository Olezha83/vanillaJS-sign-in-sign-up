import { origin } from '../configs'

import {
  avatarPictureSignUp,
  congratsSignUp,
  loginSignUp,
  passwordSignUp
} from '../helpers'

const hash = require('hash-converter');

export const submitSignUpCallback = () => {
  const digest = hash.SHA256(passwordSignUp.value);

  fetch(`${origin}/user/${loginSignUp.value}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: digest,
      avatar: avatarPictureSignUp.src
    })
  })
  
  setTimeout(() => {
    Object.assign(congratsSignUp.style, {
      display: 'block'
    })
  }, 300)
}
