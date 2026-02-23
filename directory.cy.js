import LoginPage from 'pages/LoginPage'
import DashboardPage from 'pages/DashboardPage'
import DirectoryPage from 'pages/DirectoryPage'

describe('Directory Menu Feature', () => {

  beforeEach(() => {
    cy.fixture('user').then((user) => {
      cy.login(user.validUser.username, user.validUser.password)
    })

    DashboardPage.clickDirectory()
  })

  it('TC11 - Verify Directory page loaded', () => {
    cy.url().should('include', '/directory')
  })

  it('TC12 - Search employee by name', () => {
    cy.intercept('GET', '**/directory*').as('searchEmployee')

    DirectoryPage.searchEmployee('Linda')

    cy.wait('@searchEmployee').its('response.statusCode').should('eq', 200)
  })

  it('TC13 - Reset search filter', () => {
    DirectoryPage.elements.resetButton().click()
  })

  it('TC14 - Verify result table displayed', () => {
    DirectoryPage.elements.resultTable().should('be.visible')
  })

  it('TC15 - Search with empty value', () => {
    DirectoryPage.elements.searchButton().click()
  })
})