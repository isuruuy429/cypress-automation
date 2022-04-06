/*
This class has tests to verify the AddRemoveElements page.  
*/

import AddRemoveElements from "../../page-objects/add-remove-elements";
import HomePage from "../../page-objects/homepage";

describe("add-remove-elements-tests", () => {
  const addRemoveElements = new AddRemoveElements();
  const homepage = new HomePage();
  let values;

  before(() => {
    cy.fixture("add_remove_elements_expected").then((data) => {
      values = data;
    });
    cy.visitHerakuPage();
  });

  it("should verify url contains string, add_remove_elements", () => {
    homepage.url().click();
    cy.url().should("include", values.urlValue);
  });

  it("should verify if the header contains the string - Add/Remove Elements", () => {
    addRemoveElements
      .get_header()
      .should("include.text", values.AddRemoveElements);
  });

  it("should be able to add an element", () => {
    addRemoveElements.get_addElement().click();
    addRemoveElements.get_deleteElemment().should("be.visible");
    addRemoveElements
      .get_deleteElemment()
      .should("include.text", values.delete);
  });

  it("should be able to delete an element", () => {
    addRemoveElements.get_deleteElemment().click();
    cy.contains(values.delete).should("not.exist");
  });

  after(() => {
    cy.clearCookies();
  });
});
