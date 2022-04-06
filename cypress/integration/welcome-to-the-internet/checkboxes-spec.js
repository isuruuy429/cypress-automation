/*
This class has tests to verify the Checkboxes page.  
*/

import Checkboxes from "../../page-objects/checkboxes";
import Homepage from "../../page-objects/homepage";

describe("checkboxes tests", () => {
  const checkbox = new Checkboxes();
  const homepage = new Homepage();
  let values;

  before(() => {
    cy.fixture("checkboxes_expected").then((data) => {
      values = data;
    });

    cy.visitHerakuPage();
  });

  it("should verify if url contains string, checkboxes", () => {
    homepage.checkboxes_title().click();
    cy.url().should("include", values.checkboxes);
  });

  it("should verify if checkbox can be ticked", () => {
    checkbox.get_checkbox1().check().should("be.checked");
  });

  it("should verify if checkbox can be unticked", () => {
    checkbox.get_checkbox2().uncheck().should("not.be.checked");
  });

  after(() => {
    cy.clearCookies();
  });
});
