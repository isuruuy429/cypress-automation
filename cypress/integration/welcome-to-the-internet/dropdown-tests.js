/*
This class has tests to verify the Dropdown page. 
*/

import Dropdown from '../../page-objects/dropdown'

describe('dropdown tests', ()=> {

    const dropdown = new Dropdown()

    before(()=> {
        cy.visitHerakuPage()
    })

    it('should verify if url contains string, dropdown', ()=>{
        cy.contains('Dropdown').click()
        cy.url().should('include', '/dropdown')
    })

    it('should verify if it can select items from the dropdown list', ()=>{
       dropdown.dropdown().select('Option 1').should('have.value', '1')
   })

after(()=>{
    cy.clearCookies()
})
   
})