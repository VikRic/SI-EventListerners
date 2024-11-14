import './webcomponents/my-div-box/index.js'

const customElement = document.createElement('my-div-box')
customElement.setAttribute('colorone', 'lightgreen')
customElement.setAttribute('colortwo', 'blue')

document.body.appendChild(customElement)
