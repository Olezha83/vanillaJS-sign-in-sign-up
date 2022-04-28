import {
  validateLoginSignUp,
  loginSignUp,
  loginErrorSignUp } from "../helpers";

export const loginSignUpCallback = async (event) => {
  const response = await validateLoginSignUp(event.target.value)
  response ? loginErrorSignUp.style.display = 'block' : null
  loginSignUp.onfocus = () => {
    loginErrorSignUp.style.display = 'none'
  }
}