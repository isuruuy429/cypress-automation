/*
This class has tests to verify the Checkboxes page.  
*/

import Elements from '../../page-objects/elements'

describe('checkboxes tests', ()=> {

    const elements = new Elements()
    let values;

    const checkbox1 = '#checkboxes > :nth-child(1)'
    const checkbox2 = '#checkboxes > :nth-child(3)'

    before(()=> {
        cy.fixture('expected').then((data) =>{
            values = data;
        })

        cy.visitHerakuPage()
    })

    it('should verify if url contains string, checkboxes', ()=>{
        cy.contains('Checkboxes').click()
        cy.url().should('include', values.checkboxes)
    })

    it('should verify if checkbox can be ticked', ()=>{
       elements.get_element(checkbox1).check().should('be.checked')
   })

   it('should verify if checkbox can be unticked', ()=>{
    elements.get_element(checkbox2).uncheck().should('not.be.checked')
})

after(()=>{
    cy.clearCookies()
})
   
})