/**
 * Create a template for the custom element.
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
  .size {
    height: 100px;
    width: 100px;
  }
</style>
<div id="divBox" class="size"></div>
`

export { template }
