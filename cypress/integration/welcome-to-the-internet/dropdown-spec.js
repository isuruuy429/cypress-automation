/*
This class has tests to verify the Dropdown page. 
*/

import Elements from '../../page-objects/elements'

describe('dropdown tests', ()=> {

    const elements = new Elements()
    let values;

    const h3 = 'h3'
    const dropdownVal = 'select#dropdown'

    before(()=> {
        cy.fixture('expected').then( (data) => {
                values = data;
            })

        cy.visitHerakuPage()
    })

    it('should verify if url contains string, dropdown', ()=>{
        cy.contains('Dropdown').click()
        cy.url().should('include', values.dropdown)
    })

    it('should verify if it can select items from the dropdown list', ()=>{
        elements.get_element(dropdownVal).select('Option 1').should('have.value', '1')
   })

after(()=>{
    cy.clearCookies()
})
   
})