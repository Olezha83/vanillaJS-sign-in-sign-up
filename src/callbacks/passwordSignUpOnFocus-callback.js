import { passwordSignUpInfo, passwordErrorSignUp } from '../helpers'

export const passwordSignUpOnFocusCallback = () => {
  Object.assign(passwordSignUpInfo.style, {
    display: 'block'
  })
  
  Object.assign(passwordErrorSignUp.style, {
    display: ''
  })
}