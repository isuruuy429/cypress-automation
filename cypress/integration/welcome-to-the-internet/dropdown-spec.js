/*
This class has tests to verify the Dropdown page. 
*/

import Homepage from "../../page-objects/homepage";
import DropDown from "../../page-objects/dropdown";

describe("dropdown tests", () => {
  const homepage = new Homepage();
  const dropdown = new DropDown();
  let values;

  before(() => {
    cy.fixture("dropdown_expected").then((data) => {
      values = data;
    });

    cy.visitHerakuPage();
  });

  it("should verify if url contains string, dropdown", () => {
    homepage.dropdown().click();
    cy.url().should("include", values.dropdown);
  });

  it("should verify if it can select items from the dropdown list", () => {
    dropdown.dropdownbar().select("Option 1").should("have.value", "1");
  });

  after(() => {
    cy.clearCookies();
  });
});
