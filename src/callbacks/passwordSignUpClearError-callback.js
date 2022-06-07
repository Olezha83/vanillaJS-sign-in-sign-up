import { passwordSignUpInfo, passwordErrorSignUp } from '../helpers'

export const passwordSignUpClearErrorCallback = () => {
  Object.assign(passwordSignUpInfo.style, {
    display: 'block'
  })
  
  Object.assign(passwordErrorSignUp.style, {
    display: ''
  })
}