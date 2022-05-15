import {
  validateLoginSignUp,
  loginSignUp,
  loginErrorSignUp } from "../helpers";

export const loginSignUpCallback = async (event) => {
  const response = await validateLoginSignUp(event.target.value)
  
  response
    ? Object.assign(loginErrorSignUp.style, {
      display: 'block'
    })
    : null
  
  loginSignUp.onfocus = () => {
    Object.assign(loginErrorSignUp.style, {
      display: 'none'
    })
  }
}