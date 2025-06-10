// cypress/e2e/api/produtos.cy.js
import "../../support/commands";

describe("API – Produtos", () => {
  let produtoId;
  const novoProduto = {
    nome: `Produto ${Date.now()}`,
    preco: 49,
    descricao: "Descrição de teste",
    quantidade: 5,
  };

  before(() => {
    // faz login e guarda token em Cypress.env("token")
    cy.loginApi();
  });

  it("cria um produto (admin)", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("apiBaseUrl")}/produtos`,
      headers: {
        authorization: Cypress.env("token"),
      },
      body: novoProduto,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq("Cadastro realizado com sucesso");
      produtoId = res.body._id;
    });
  });

});
