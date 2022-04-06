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

import Homepage from "../../page-objects/homepage";

describe("File download tests", () => {
  const homepage = new Homepage();

  const downloadURL =
    "https://the-internet.herokuapp.com/download/some-file.txt";
  const location = "cypress/fixtures/Download";
  const filename = "downloaded.txt";

  let values;

  before(() => {
    cy.fixture("downloadFile_expected").then((data) => {
      values = data;
    });
    cy.visitHerakuPage();
  });

  it("should verify url contains string, download", () => {
    homepage.fileDownload().click();
    cy.url().should("include", values.urlValue);
  });

  it("should verify if file is downloaded to cypress.fixtures folder", () => {
    cy.downloadFile(downloadURL, location, filename);
    cy.readFile(`${location}/${filename}`).should(
      "contain",
      values.expectedText
    );
  });
});
