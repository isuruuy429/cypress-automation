/*
This class contains the reusable method to get elements. 
*/

class elements{

    get_element(path){
        return cy.get(path)
    }
    
}

export default elements