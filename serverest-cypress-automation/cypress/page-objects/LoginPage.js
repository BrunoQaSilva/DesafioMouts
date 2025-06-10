class LoginPage {
  getEmailField() {
    return cy.get('[data-testid="email"]') // Exemplo de seletor
  }

  getPasswordField() {
    return cy.get('[data-testid="password"]')
  }

  getLoginButton() {
    return cy.get('[data-testid="entrar"]')
  }

  login(email, password) {
    this.getEmailField().type(email)
    this.getPasswordField().type(password)
    this.getLoginButton().click()
  }
}
export default new LoginPage()