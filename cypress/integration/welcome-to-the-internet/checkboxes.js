/*
This class has tests to verify the Checkboxes page.  
*/

import Checkboxes from '../../page-objects/checkboxes'

describe('checkboxes tests', ()=> {

    const checkboxes = new Checkboxes()

    before(()=> {
        cy.visitHerakuPage()
    })

    it('should verify if url contains string, checkboxes', ()=>{
        cy.contains('Checkboxes').click()
        cy.url().should('include', '/checkboxes')
    })

    it('should verify if checkbox can be ticked', ()=>{
       checkboxes.checkbox1().check().should('be.checked')
   })

   it('should verify if checkbox can be unticked', ()=>{
    checkboxes.checkbox2().uncheck().should('not.be.checked')
})

after(()=>{
    cy.clearCookies()
})
   
})