import { signUpTemplate } from '../templates'

import {
  loginSignUp,
  passwordSignUp,
  avatarSelectSignUp,
  avatarPictureSignUp,
  submitSignUp,
  getSignUpElems
} from '../helpers'

import {
  loginSignUpCallback,
  loginSignUpClearErrorCallback,
  passwordSignUpCallback,
  passwordSignUpClearErrorCallback,
  avatarSignUpCallback,
  avatarSignUpClearErrorCallback,
  submitSignUpCallback
} from '../callbacks'

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
    loginSignUp.onfocus = loginSignUpClearErrorCallback
    passwordSignUp.onfocus = passwordSignUpClearErrorCallback
    passwordSignUp.onblur = passwordSignUpCallback
    avatarSelectSignUp.onchange = event => {
      avatarSignUpCallback(event.target.files[0], avatarPictureSignUp)
    }
    avatarSelectSignUp.onclick = avatarSignUpClearErrorCallback
    submitSignUp.onclick = submitSignUpCallback
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
    loginSignUp.onfocus = null
    passwordSignUp.onfocus = null
    passwordSignUp.onblur = null
    avatarSelectSignUp.onchange = null
    avatarSelectSignUp.onclick = null
    submitSignUp.onclick = null
  }
}

customElements.define('sign-up', SignUp)

export default (document.createElement('sign-up'))