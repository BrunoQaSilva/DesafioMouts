describe("Login E2E", () => {
  beforeEach(() => cy.visit("/"));
  it("faz login com usuário admin e vê dashboard", () => {
    cy.contains("Login").click();
    // seletores com aspas para evitar ambiguidade
    cy.get('input[name="email"]')
      .type(Cypress.env("emailUser"));        // ← chave: emailAdmin
    cy.get('input[name="password"]')
      .type(Cypress.env("senhaUser"));       // ← chave: senhaAdmin
    cy.get("button[type=submit]").click();
    cy.url().should("include", "/home");
    cy.contains("Produtos").should("exist");
    cy.get('[data-testid="adicionarNaLista"]').first().click();
    cy.get('[data-testid="adicionar carrinho"]').click();
    cy.contains("Em construção aguarde").should("be.visible");
  });
});