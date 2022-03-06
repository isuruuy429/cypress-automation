/*
This class contains the page objects of Add/Remove elements page. 
*/

class add_remove_elements{

    header(){
        return cy.get('h3')
    }

    add_element(){
        return cy.get("button[onclick='addElement()']")
    }

    delete_element(){
        return cy.get("button[onclick='deleteElement()']")
    }
    
}

export default add_remove_elements