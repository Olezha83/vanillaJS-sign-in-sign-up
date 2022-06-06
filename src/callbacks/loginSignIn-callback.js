import {
  loginSignIn,
  loginErrorSignIn,
  getUserDetailsSignIn
} from "../helpers"

let isLoginCheckedSignIn

const loginSignInCallback = async (event) => {
  const response = await getUserDetailsSignIn(event.target.value)

  isLoginCheckedSignIn = true

  if (response) {
    localStorage.setItem('password', response.password)
    localStorage.setItem('avatar', response.avatar)  
  } else {
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