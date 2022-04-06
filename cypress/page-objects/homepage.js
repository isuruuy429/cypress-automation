
class homepage {
  url_text = "Add/Remove Elements";

  checkboxes_title() {
    return cy.contains("Checkboxes");
  }

  header1() {
    return cy.get("h1");
  }

  header2() {
    return cy.get("h2");
  }

  url() {
    return cy.contains(this.url_text);
  }

  fileDownload() {
    return cy.get("a[href='/download']");
  }

  dragndrop() {
    return cy.contains("Drag and Drop");
  }

  dropdown() {
    return cy.contains("Dropdown");
  }
}

export default homepage;
