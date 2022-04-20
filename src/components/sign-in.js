import { signInTemplate } from "../templates"

import {
  loginSignIn,
  passwordSignIn,
  submitSignIn,
  getSignInElems
} from "../helpers"

class SignIn extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow( {mode: 'closed'} )
    this.wrapper = shadow.appendChild(document.createElement('main'))
    this.wrapper.innerHTML = signInTemplate
    getSignInElems(shadow)
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

customElements.define('sign-in', SignIn)

export default (document.createElement('sign-in'))