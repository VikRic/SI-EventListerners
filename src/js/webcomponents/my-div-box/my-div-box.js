/**
 * Creates the custom element.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import { template } from './my-div-box-template.js'

customElements.define('my-div-box',
  /**
   * Extends the HTMLElement
   */
  class extends HTMLElement {
    #divBox
    #colorOne
    #colorTwo
    #boundDivBoxOver
    #boundDivBoxOut
    /**
     * Creates an instance of the custom element and attaches a shadow DOM.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#divBox = this.shadowRoot.querySelector('#divBox')
    }

    /**
     * Returns an array of attributes to be observed for changes.
     *
     * @returns {string[]} The list of attributes to be observed.
     */
    static get observedAttributes () {
      return ['colorone', 'colortwo']
    }

    /**
     * Called when one of the observed attributes changes.
     *
     * @param {string} name The name of the attribute that changed.
     * @param {string} oldValue The old value of the attribute.
     * @param {string} newValue The new value of the attribute.
     */
    attributeChangedCallback (name, oldValue, newValue) {
      if (name === 'colorone' && oldValue !== newValue) {
        this.#colorOne = newValue
      } else if (name === 'colortwo' && oldValue !== newValue) {
        this.#colorTwo = newValue
        this.#setColor(newValue)
      }
    }

    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback () {
      /**
       * Listens to mouse over.
       *
       * @param {Event} event - The event.
       */
      this.#divBox.addEventListener('mouseover', this.#boundDivBoxOver = (event) => {
        this.#setColor(this.#colorOne)
      })

      /**
       * Listens to mouse out.
       *
       * @param {Event} event - The event.
       */
      this.#divBox.addEventListener('mouseleave', this.#boundDivBoxOut = (event) => {
        this.#setColor(this.#colorTwo)
      })
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback () {
      this.#divBox.removeEventListener('', this.#boundDivBoxOver)
      this.#divBox.removeEventListener('', this.#boundDivBoxOut)
    }

    /**
     * Sets a new background color.
     *
     * @param {string} color - The new color.
     */
    #setColor (color) {
      this.#divBox.style.background = color
    }
  })
