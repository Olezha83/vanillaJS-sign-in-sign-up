import {
  passwordErrorSignUp,
  passwordSignUpInfo,
  validateForm
} from '../helpers'

import { passwordRule } from '../configs'

export const passwordSignUpCallback = (event) => {
  passwordRule.test(event.target.value)
    ? Object.assign(passwordSignUpInfo.style, {
      display: ''
    })
    : Object.assign(passwordErrorSignUp.style, {
      display: 'block'
    })
  
  validateForm()
}