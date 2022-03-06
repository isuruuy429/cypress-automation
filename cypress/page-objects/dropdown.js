/*
This class contains the page objects of Dropdown page. 
*/

class Dropdown {

    dropdown_list_header(){
        return cy.get('h3')
    }


    dropdown(){
        return cy.get('select#dropdown')
    }
    

}

export default Dropdown