/*
This class has tests to verify the AddRemoveElements page.  
*/
import AddRemoveElements from '../../page-objects/add-remove-elemets'

describe('add-remove-elements-tests', ()=> {

    const add_remove_elements = new AddRemoveElements()
    let values;
    let urlValue = '/add_remove_elements/'

    before(()=> {
        cy.fixture('expected').then( (data) => {
            values = data;
        })
        cy.visitHerakuPage()
    })

    it('should verify url contains string, add_remove_elements', ()=> {
        cy.contains('Add/Remove Elements').click()
        cy.url().should('include', urlValue)
        add_remove_elements.header().should('include.text',values.AddRemoveElements)
    })

    it('should be able to add an element', ()=> {
        add_remove_elements.add_element().should('be.visible')
        add_remove_elements.add_element().should('include.text',values.add_element)
        
        add_remove_elements.add_element().click()
        add_remove_elements.delete_element().should('be.visible')
        add_remove_elements.delete_element().should('include.text',values.delete)
    })

    it('should be able to delete an element', ()=> {
        add_remove_elements.delete_element().click()
        cy.contains('Delete').should('not.exist')
    })

    after(()=>{
        cy.clearCookies()
    })
})