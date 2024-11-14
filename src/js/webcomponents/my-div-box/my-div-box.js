import { template } from './my-div-box-template.js'

customElements.define('my-div-box',
  /**
   * Represents a tiny-tune element.
   */
  class extends HTMLElement {
    #colorOne
    #colorTwo
    #divBox
    #boundDivBoxOver
    #boundDivBoxOut
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#divBox = this.shadowRoot.querySelector('#divBox')
    }

    /**
     * Observed attributes.
     *
     * @returns {string[]} returns observed attributes.
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
  }
)
