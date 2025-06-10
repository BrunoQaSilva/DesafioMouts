// cypress/e2e/api/auth.cy.js
describe("API – Autenticação", () => {
  it("login com credenciais válidas retorna token", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("apiBaseUrl")}/login`,
      body: {
        email: Cypress.env("emailAdmin"),
        password: Cypress.env("senhaAdmin"),
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("authorization");
    });
  });

  it("login com credenciais inválidas retorna 401", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("apiBaseUrl")}/login`,
      body: { email: "x@x.com", password: "errada" },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(401);
    });
  });
});
