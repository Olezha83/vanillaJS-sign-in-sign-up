import {
  signUpElement,
  signInElement,
  signUpTab,
  signInTab,
} from "../helpers";

export function showSignUp () {
  signUpTab.onclick = () => {
    signUpElement.setAttribute('display', 'block')
    signInElement.setAttribute('display', 'none')
  }
}

export function showSignIn () {
  signInTab.onclick = () => {
    signInElement.setAttribute('display', 'block')
    signUpElement.setAttribute('display', 'none')
  }
}

