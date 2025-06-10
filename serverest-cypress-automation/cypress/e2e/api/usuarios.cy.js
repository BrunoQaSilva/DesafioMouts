// cypress/e2e/api/usuarios.cy.js
describe("API – Usuários", () => {
  let usuarioId;
  const usuario = {
    nome: "Teste API",
    email: `api_${Date.now()}@qa.com`,
    password: "Senha!123",
    administrador: "false",
  };

  it("cadastra novo usuário", () => {
    cy.request("POST", `${Cypress.env("apiBaseUrl")}/usuarios`, usuario)
      .then((res) => {
        expect(res.status).to.eq(201);
        expect(res.body.message).to.eq("Cadastro realizado com sucesso");
        usuarioId = res.body._id;
      });
  });

  it("deleta o usuário criado (admin token)", () => {
    // primeiro autentica como admin
    cy.loginApi().then(() => {
      cy.request({
        method: "DELETE",
        url: `${Cypress.env("apiBaseUrl")}/usuarios/${usuarioId}`,
        headers: { authorization: Cypress.env("token") },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.message).to.eq("Registro excluído com sucesso");
      });
    });
  });
});
