class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get('.oxd-alert-content-text'),
    forgotPasswordLink: () => cy.contains('Forgot your password?')
  }

  visit() {
    cy.visit('/')
  }

  typeUsername(username) {
    this.elements.usernameInput().clear().type(username)
  }

  typePassword(password) {
    this.elements.passwordInput().clear().type(password)
  }

  clickLogin() {
    this.elements.loginButton().click()
  }

  clickForgotPassword() {
    this.elements.forgotPasswordLink().click()
  }
}

export default new LoginPage()