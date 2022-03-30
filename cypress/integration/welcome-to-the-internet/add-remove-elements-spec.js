/*
This class has tests to verify the AddRemoveElements page.  
*/
import Elements from '../../page-objects/elements'

describe('add-remove-elements-tests', ()=> {

    const elements = new Elements()
    let values;
    let urlValue = '/add_remove_elements/'

    const header='h3'
    const add_element="button[onclick='addElement()']"
    const delete_element="button[onclick='deleteElement()']"

    before(()=> {
        cy.fixture('expected').then( (data) => {
            values = data;
        })
        cy.visitHerakuPage()
    })

    it('should verify url contains string, add_remove_elements', ()=> {
        cy.contains('Add/Remove Elements').click()
        cy.url().should('include', urlValue)
        elements.get_element(header).should('include.text',values.AddRemoveElements)
    })

    it('should be able to add an element', ()=> {
        elements.get_element(add_element).should('be.visible')
        elements.get_element(add_element).should('include.text',values.add_element)
        
        elements.get_element(add_element).click()
        elements.get_element(delete_element).should('be.visible')
        elements.get_element(delete_element).should('include.text',values.delete)
    })

    it('should be able to delete an element', ()=> {
        elements.get_element(delete_element).click()
        cy.contains('Delete').should('not.exist')
    })

    after(()=>{
        cy.clearCookies()
    })
})