/**
 * KOMMENTAR FÖR MODULEN
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

import './webcomponents/my-div-box/index.js'

const myCustomElement = document.createElement('my-div-box')
myCustomElement.setAttribute('colorone', 'green')
myCustomElement.setAttribute('colortwo', 'blue')

const body = document.querySelector('body')

body.appendChild(myCustomElement)
