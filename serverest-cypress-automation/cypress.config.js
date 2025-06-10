const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev",

    setupNodeEvents(on, config) {
      // node events, se precisar
    },
        env: {
      apiBaseUrl: "https://serverest.dev",
      emailAdmin: "bruno_admin2@qa.com",
      senhaAdmin: "Senha!123",
      emailUser: "bruno_1749549989459@qa.com",
      senhaUser: "Senha!123"    
    },
  },
});
