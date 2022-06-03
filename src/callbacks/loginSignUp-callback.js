import {
  validateLoginSignUp,
  loginSignUp,
  loginErrorSignUp, 
  validateForm
} from '../helpers'

let isLoginChecked

export const loginSignUpCallback = async (event) => {
  const response = await validateLoginSignUp(event.target.value)

  isLoginChecked = true
  
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

export { isLoginChecked }