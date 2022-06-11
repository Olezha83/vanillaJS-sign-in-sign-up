import {
  passwordErrorSignUp,
  passwordSignUpInfo,
  validateFormSignUp
} from '../helpers'

import { passwordRule } from '../configs'

export const passwordSignUpCallback = (event) => {
  passwordRule.test(event.target.value)
    ? setTimeout (() => {
        Object.assign(passwordSignUpInfo.style, {
          display: ''
        })
      }, 300)
      
    : Object.assign(passwordErrorSignUp.style, {
        display: 'block'
      })
  
  validateFormSignUp()
}
