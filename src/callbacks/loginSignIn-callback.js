import {
  loginSignIn,
  loginErrorSignIn,
  validateLogin
} from "../helpers"

let isLoginCheckedSignIn

const loginSignInCallback = async (event) => {
  const response = await validateLogin(event.target.value)

  isLoginCheckedSignIn = true

  if (!response) {
    Object.assign(loginErrorSignIn.style, {
      display: 'block'
    })
  }

  loginSignIn.onfocus = () => {
    Object.assign(loginErrorSignIn.style, {
      display: ''
    })
  }
}

export {
  loginSignInCallback,
  isLoginCheckedSignIn
}