import { signUpTemplate } from "../templates"

import {
  loginSignUp,
  loginErrorSignUp,
  passwordSignUp,
  avatarSignUp,
  submitSignUp,
  getSignUpElems
} from "../helpers"

import {
  loginSignUpCallback
} from "../callbacks"

class SignUp extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow( {mode: 'closed'} )
    this.wrapper = shadow.appendChild(document.createElement('main'))
    this.wrapper.innerHTML = signUpTemplate
    getSignUpElems(shadow)
    loginSignUp.onblur = loginSignUpCallback
  }

  connectedCallback () {
    this.setAttribute('display', 'none')
  }

  static get observedAttributes () {
    return ['display']
  }
  
  attributeChangedCallback (attrName, oldVal, newVal) {
    Object.assign(this.wrapper.style, {
      display: newVal
    })
  }
}

customElements.define('sign-up', SignUp)

export default (document.createElement('sign-up'))