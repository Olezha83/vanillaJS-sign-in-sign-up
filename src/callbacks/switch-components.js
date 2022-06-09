import { signUpElement, signInElement } from '../helpers'

function showSignUp () {
  signUpElement.setAttribute('display', 'block')
  signInElement.setAttribute('display', 'none')
}

function showSignIn () {
  signInElement.setAttribute('display', 'block')
  signUpElement.setAttribute('display', 'none')
}

export {
  showSignUp,
  showSignIn
}
