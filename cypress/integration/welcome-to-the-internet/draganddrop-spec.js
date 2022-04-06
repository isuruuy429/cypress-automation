/*

This class has tests to verify the DragandDrop page.  An extra plugin is needed to run the tests which is 
npm install --save-dev @4tw/cypress-drag-drop
In the cypress.json file, it should be included as below. 
"compilerOptions": {
    "types": ["cypress", "@4tw/cypress-drag-drop"]
}
In the command.js file, the following needs to be added. 
require('@4tw/cypress-drag-drop')

*/
import Homepage from "../../page-objects/homepage";

describe("draganddrop tests", () => {
  const homepage = new Homepage();
  let values;

  before(() => {
    cy.fixture("dragndrop_expected").then(function (data) {
      values = data;
    });

    cy.visitHerakuPage();
  });

  it("should verify if url contains string, drag_and_drop", () => {
    homepage.dragndrop().click();
    cy.url().should("include", values.drag_and_drop);
  });

  it("should verify if A can be dragged and dropped to B", () => {
    cy.get("#column-a").drag("#column-b");
  });

  after(() => {
    cy.clearCookies();
  });
});
