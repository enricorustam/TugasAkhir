class DirectoryPage {
  elements = {
    searchButton: () => cy.get('button[type="submit"]'),
    resetButton: () => cy.contains('Reset'),
    employeeNameInput: () => cy.get('input[placeholder="Type for hints..."]'),
    resultTable: () => cy.get('.oxd-table')
  }

  searchEmployee(name) {
    this.elements.employeeNameInput().type(name)
    this.elements.searchButton().click()
  }
}

export default new DirectoryPage()