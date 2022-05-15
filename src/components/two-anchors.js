import { twoAnchorsTemplate } from "../templates";

import {
  getTabs,
  getElems
} from "../helpers"

import {
  showSignIn,
  showSignUp
} from "../callbacks"

class TwoAnchors extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow( {mode: 'closed'} )
    const wrapper = this.shadow.appendChild(document.createElement('main'))
    wrapper.innerHTML = twoAnchorsTemplate
  }

  connectedCallback () {
    getTabs(this.shadow)
    getElems()
    showSignIn()
    showSignUp()
  }

}

customElements.define('two-anchors', TwoAnchors)

export default (document.createElement('two-anchors'))