class DashboardPage {
  elements = {
    dashboardHeader: () => cy.contains('Dashboard'),
    directoryMenu: () => cy.contains('Directory')
  }

  clickDirectory() {
    this.elements.directoryMenu().click()
  }
}

export default new DashboardPage()