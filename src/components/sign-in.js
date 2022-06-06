import { signInTemplate } from '../templates'

import {
  loginSignIn,
  passwordSignIn,
  getSignInElems,
  submitSignIn
} from '../helpers'

import {
  loginSignInCallback,
  passwordSignInCallback,
  passwordSignInOnFocusCallback
} from '../callbacks'

class SignIn extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow( {mode: 'closed'} )
    this.wrapper = shadow.appendChild(document.createElement('main'))
    this.wrapper.innerHTML = signInTemplate
    getSignInElems(shadow)
  }

  connectedCallback () {
    loginSignIn.onblur = loginSignInCallback
    passwordSignIn.onblur = passwordSignInCallback
    passwordSignIn.onfocus = passwordSignInOnFocusCallback
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
    loginSignIn.onblur = null
    passwordSignIn.onblur = null
    passwordSignIn.onfocus = null
  }
}

customElements.define('sign-in', SignIn)

export default (document.createElement('sign-in'))