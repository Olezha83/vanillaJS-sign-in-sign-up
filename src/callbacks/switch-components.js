import { signUpElement, signInElement } from '../helpers'

export function showSignUp () {
  signUpElement.setAttribute('display', 'block')
  signInElement.setAttribute('display', 'none')
}

export function showSignIn () {
  signInElement.setAttribute('display', 'block')
  signUpElement.setAttribute('display', 'none')
}