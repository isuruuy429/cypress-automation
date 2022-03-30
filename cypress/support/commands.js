import AddRemoveElements from '../page-objects/elements'

require('@4tw/cypress-drag-drop')
require('cypress-downloadfile/lib/downloadFileCommand')

const add_remove_elements = new AddRemoveElements()

const h1 = 'h1'
const h2 = 'h2'

Cypress.Commands.add('visitHerakuPage', () => { 
    let main_url = '/'
    cy.visit(main_url)

    add_remove_elements.get_element(h1).should('contain.text', 'Welcome to the-internet')
    add_remove_elements.get_element(h2).should('contain.text', 'Available Examples')
})
