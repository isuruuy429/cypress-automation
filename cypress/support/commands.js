import HomePage from "../page-objects/homepage";

require("@4tw/cypress-drag-drop");
require("cypress-downloadfile/lib/downloadFileCommand");

const homepage = new HomePage();

Cypress.Commands.add("visitHerakuPage", () => {
  let main_url = "/";
  cy.visit(main_url);

  homepage.header1().should("contain.text", "Welcome to the-internet");
  homepage.header2().should("contain.text", "Available Examples");
});
