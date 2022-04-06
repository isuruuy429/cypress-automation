
class checkboxes {
  checkbox1 = "#checkboxes > :nth-child(1)";
  checkbox2 = "#checkboxes > :nth-child(3)";

  get_checkbox1() {
    return cy.get(this.checkbox1);
  }

  get_checkbox2() {
    return cy.get(this.checkbox2);
  }
}

export default checkboxes;
