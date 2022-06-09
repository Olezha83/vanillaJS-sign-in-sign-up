import {
  validateLoginSignUp,
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

  validateFormSignUp()
}

export {
  loginSignUpCallback,
  isLoginCheckedSignUp
}
