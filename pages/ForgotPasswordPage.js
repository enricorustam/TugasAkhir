class ForgotPasswordPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    resetButton: () => cy.get('button[type="submit"]'),
    successMessage: () => cy.get('.oxd-text--h6')
  }

  resetPassword(username) {
    this.elements.usernameInput().type(username)
    this.elements.resetButton().click()
  }
}

export default new ForgotPasswordPage()