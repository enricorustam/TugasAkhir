import LoginPage from 'pages/LoginPage'

describe('Login Feature', () => {

  beforeEach(() => {
    cy.fixture('user').as('userData')
    LoginPage.visit()
  })

  it('TC01 - Login with valid credentials', function () {
    cy.intercept('POST', '**/auth/login').as('loginRequest')

    LoginPage.typeUsername(this.userData.validUser.username)
    LoginPage.typePassword(this.userData.validUser.password)
    LoginPage.clickLogin()

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302)
    cy.url().should('include', '/dashboard')
  })

  it('TC02 - Login with invalid username', function () {
    LoginPage.typeUsername('Wrong')
    LoginPage.typePassword(this.userData.validUser.password)
    LoginPage.clickLogin()

    LoginPage.elements.errorMessage().should('be.visible')
  })

  it('TC03 - Login with invalid password', function () {
    LoginPage.typeUsername(this.userData.validUser.username)
    LoginPage.typePassword('wrongpass')
    LoginPage.clickLogin()

    LoginPage.elements.errorMessage().should('be.visible')
  })

  it('TC04 - Login with empty username', function () {
    LoginPage.typePassword('admin123')
    LoginPage.clickLogin()
    LoginPage.elements.errorMessage().should('exist')
  })

  it('TC05 - Login with empty password', function () {
    LoginPage.typeUsername('Admin')
    LoginPage.clickLogin()
    LoginPage.elements.errorMessage().should('exist')
  })

  it('TC06 - Validate forgot password link visible', () => {
    LoginPage.elements.forgotPasswordLink().should('be.visible')
  })
})