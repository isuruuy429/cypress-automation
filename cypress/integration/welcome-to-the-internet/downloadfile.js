/*
**
This class has tests to verify the DownloadFile page.  An extra plugin is needed to run the tests which is 
npm install --save -dev cypress-downloadfile

Add the following line to cypress/support/commands.js
require('cypress-downloadfile/lib/downloadFileCommand')

Add the following lines to cypress/plugins/index.js
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('task', {downloadFile})
}

*/

describe('File download tests', () =>{

    it('should verify if file is downloaded to cypress.fixtures folder', () => {
        cy.downloadFile('https://the-internet.herokuapp.com/download/some-file.txt',
            'cypress/fixtures/Download', 'some-file.txt')
        cy.readFile('cypress/fixtures/Download/some-file.txt').should('contain', 'ansicpg1252')    
    })
})