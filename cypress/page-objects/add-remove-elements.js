class add_remove_elements {
  add_element = "button[onclick='addElement()']";
  delete_element = "button[onclick='deleteElement()']";
  h3 = "h3";

  get_addElement() {
    return cy.get(this.add_element);
  }

  get_deleteElemment() {
    return cy.get(this.delete_element);
  }

  get_header() {
    return cy.get(this.h3);
  }
}

export default add_remove_elements;
