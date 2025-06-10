// cypress/e2e/frontend/cadastro.cy.js
describe("Cadastro de Usuário", () => {
  it("deve cadastrar um usuário novo e exibir mensagem de sucesso", () => {
    cy.visit("/");
    cy.contains("Cadastre-se").click();
    cy.get("input[name=nome]").type("Bruno QA");
    cy.get("input[name=email]").type(`bruno_${Date.now()}@qa.com`);
    cy.get("input[name=password]").type("Senha!123");
    cy.get("input[name='administrador']")
    .should("exist")            // opcional: garante que o checkbox esteja no DOM
    .check()                    // marca como “administrador”
    cy.get("button[type=submit]").click();
    cy.contains("Cadastro realizado com sucesso").should("be.visible");
  });
});