import {
  passwordErrorSignUp,
  passwordSignUpInfo,
} from "../helpers"

import { passwordRule } from "../configs"

export const passwordSignUpErrorCallback = (event) => {
  passwordRule.test(event.target.value)
    ? Object.assign(passwordSignUpInfo.style, {
      display: 'none'
    })
    : Object.assign(passwordErrorSignUp.style, {
      display: 'block'
    })
}