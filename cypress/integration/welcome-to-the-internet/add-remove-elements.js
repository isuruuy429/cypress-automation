/*
This class has tests to verify the AddRemoveElements page.  
*/
import AddRemoveElements from '../../page-objects/add-remove-elemets'

describe('add-remove-elements-tests', ()=> {

    const add_remove_elements = new AddRemoveElements()

    before(()=> {
        cy.visitHerakuPage()
    })

    it('should verify url contains string, add_remove_elements', ()=> {
        cy.contains('Add/Remove Elements').click()
        cy.url().should('include', '/add_remove_elements/')
        add_remove_elements.header().should('include.text','Add/Remove Elements')
    })

    it('should be able to add an element', ()=> {
        add_remove_elements.add_element().should('be.visible')
        add_remove_elements.add_element().should('include.include.text','Add Element')
        
        add_remove_elements.add_element().click()
        add_remove_elements.delete_element().should('be.visible')
        add_remove_elements.delete_element().should('include.text','Delete')
    })

    it('should be able to delete an element', ()=> {
        add_remove_elements.delete_element().click()
        cy.contains('Delete').should('not.exist')
    })

    after(()=>{
        cy.clearCookies()
    })
})