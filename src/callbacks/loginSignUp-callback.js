import {
  validateLoginSignUp,
  loginSignUp,
  loginErrorSignUp, 
  validateFormSignUp
} from '../helpers'

let isLoginCheckedSignUp

const loginSignUpCallback = async (event) => {
  const response = await validateLoginSignUp(event.target.value)

  isLoginCheckedSignUp = true
  
  if (response) {
    Object.assign(loginErrorSignUp.style, {
      display: 'block'
    })
  }

  loginSignUp.onfocus = () => {
    Object.assign(loginErrorSignUp.style, {
      display: ''
    })
  }

  validateFormSignUp()
}

export {
  loginSignUpCallback,
  isLoginCheckedSignUp
}