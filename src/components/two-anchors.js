import { twoAnchorsTemplate } from "../templates"

import { getTabs, getElems, signInTab, signUpTab } from "../helpers"

import {  showSignIn, showSignUp } from "../callbacks"

class TwoAnchors extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow( {mode: 'closed'} )
    const wrapper = shadow.appendChild(document.createElement('main'))
    wrapper.innerHTML = twoAnchorsTemplate
    getTabs(shadow)
  }

  connectedCallback () {
    getElems()
    signInTab.onclick = showSignIn
    signUpTab.onclick = showSignUp
  }

  disconnectedCallback () {
    signInTab.onclick = null
    signUpTab.onclick = null
  }
}

customElements.define('two-anchors', TwoAnchors)

export default (document.createElement('two-anchors'))