/*
This class contains the page objects of home page. 
*/

class homepage{

    h1(){
        return cy.get('h1')
    }

    h2(){
        return cy.get('h2')
    }
    
}

export default homepage