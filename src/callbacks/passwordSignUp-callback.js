import {
  passwordErrorSignUp,
  passwordSignUpInfo,
  validateFormSignUp
} from '../helpers'

import { passwordRule } from '../configs'

export const passwordSignUpCallback = (event) => {
  Object.assign(passwordSignUpInfo.style, {
    display: ''
  })
  
  passwordRule.test(event.target.value)
    ? null 
    : Object.assign(passwordErrorSignUp.style, {
        display: 'block'
      })
  
  validateFormSignUp()
}
