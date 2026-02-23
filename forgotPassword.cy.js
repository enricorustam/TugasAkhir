import LoginPage from 'pages/LoginPage'
import ForgotPasswordPage from 'pages/ForgotPasswordPage'

describe('Forgot Password Feature', () => {

  beforeEach(() => {
    LoginPage.visit()
    LoginPage.clickForgotPassword()
  })

  it('TC07 - Reset password with valid username', () => {
    cy.intercept('POST', '**/requestPasswordResetCode').as('resetRequest')

    ForgotPasswordPage.resetPassword('Admin')

    cy.wait('@resetRequest').its('response.statusCode').should('eq', 200)
  })

  it('TC08 - Reset password with invalid username', () => {
    ForgotPasswordPage.resetPassword('WrongUser')
  })

  it('TC09 - Reset password with empty field', () => {
    ForgotPasswordPage.elements.resetButton().click()
  })

  it('TC10 - Verify reset page title', () => {
    cy.contains('Reset Password').should('be.visible')
  })
})