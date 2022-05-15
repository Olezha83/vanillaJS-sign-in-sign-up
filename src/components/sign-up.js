import { signUpTemplate } from "../templates"

import {
  loginSignUp,
  passwordSignUp,
  avatarSignUp,
  submitSignUp,
  getSignUpElems
} from "../helpers"

import {
  loginSignUpCallback,
  passwordSignUpOnFocusCallback,
  passwordSignUpErrorCallback
} from "../callbacks"

class SignUp extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow( {mode: 'closed'} )
    this.wrapper = shadow.appendChild(document.createElement('main'))
    this.wrapper.innerHTML = signUpTemplate
    getSignUpElems(shadow)
  }

  connectedCallback () {
    loginSignUp.onblur = loginSignUpCallback
    passwordSignUp.onfocus = passwordSignUpOnFocusCallback
    passwordSignUp.onblur = passwordSignUpErrorCallback
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

  disconnectedCallback () {
    loginSignUp.onblur = null
    passwordSignUp.onfocus = null
    passwordSignUp.onblur = null
  }
}

customElements.define('sign-up', SignUp)

export default (document.createElement('sign-up'))