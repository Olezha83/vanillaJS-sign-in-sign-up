import {
  validateLoginSignUp,
  loginSignUp,
  loginErrorSignUp, 
  validateForm
} from '../helpers'

export const loginSignUpCallback = async (event) => {
  const response = await validateLoginSignUp(event.target.value)
  
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

  validateForm()
}