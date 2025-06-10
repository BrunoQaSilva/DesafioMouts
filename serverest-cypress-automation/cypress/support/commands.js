// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

// cypress/support/commands.js
/*
Cypress.Commands.add("loginApi", () => {
  cy.request({
    method: "POST",
    url: `${Cypress.env("apiBaseUrl")}/login`,
    body: {
      email: Cypress.env("emailAdmin"),     // permanece igual
      password: Cypress.env("senhaAdmin"),  // agora usa "password"
    },
  }).then((res) => {
    expect(res.status).to.eq(200);
    // joga o token no localStorage da aplicação
    cy.window().then((win) => {
      win.localStorage.setItem("serverest@token", res.body.authorization);
    });
  });
});*/

// cypress/support/commands.js

// Comando customizado para login via API
Cypress.Commands.add("loginApi", () => {
  return cy
    .request({
      method: "POST",
      url: `${Cypress.env("apiBaseUrl")}/login`,
      body: {
        email: Cypress.env("emailAdmin"),
        password: Cypress.env("senhaAdmin"),
      },
      failOnStatusCode: false
    })
    .its("body.authorization")    // extrai o token
    .then((token) => {
      // armazena no Cypress.env para usar no spec
      Cypress.env("token", token);

      // armazena no localStorage para testes de frontend
      return cy.window().then((win) => {
        win.localStorage.setItem("serverest@token", token);
        return token;  // devolve o token para o chain
      });
    });
});
