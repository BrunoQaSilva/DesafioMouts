# Desafio de Automação com Cypress Framework

Este repositório contém os testes de automação desenvolvidos utilizando o Cypress Framework para o desafio proposto. O objetivo foi automatizar cenários de testes End-to-End (E2E) para o frontend e testes de API para a aplicação Serverest.

---

## 🚀 Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/)**: Framework de testes E2E e de API.
* **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**: Linguagem de programação.
* **[Node.js](https://nodejs.org/)**: Ambiente de execução para o Cypress.
* **[npm](https://www.npmjs.com/)**: Gerenciador de pacotes.
* **[Git](https://git-scm.com/)**: Sistema de controle de versão.
* **[GitHub](https://github.com/)**: Plataforma para hospedagem de código.
---

## 🌐 Aplicações Testadas

* **Frontend:** [https://front.serverest.dev/](https://front.serverest.dev/)
* **API (Swagger):** [https://serverest.dev/](https://serverest.dev/)

---

## ⚙️ Configuração e Instalação

Para rodar os testes neste projeto, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/BrunoQaSilva/DesafioMouts.git](https://github.com/BrunoQaSilva/DesafioMouts.git)
    cd DesafioMouts
    ```

2.  **Instalar as dependências:** (NAO NECESSARIO, POIS NAO USEI GIT IGNORE)
    Porem para garantir: Certifique-se de ter o Node.js e o npm instalados. Em seguida, instale as dependências do projeto:
    ```bash
    npm install
    ```

3.  **Configuração do Cypress (opcional, se você quiser mudar variáveis de ambiente):**
    O arquivo `cypress.config.js` contém as configurações base do Cypress, incluindo as URLs das aplicações.
    ```javascript
    // cypress.config.js
    const { defineConfig } = require('cypress')

    module.exports = defineConfig({
      e2e: {
        baseUrl: '[https://front.serverest.dev/](https://front.serverest.dev/)',
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      },
      env: {
        apiUrl: '[https://serverest.dev](https://serverest.dev)', // URL base da API
      },
      // ... outras configurações
    })
    ```

---

## ▶️ Como Rodar os Testes

Você pode rodar os testes de duas maneiras:

### 1. Modo Interativo (Cypress Test Runner)

Para abrir a interface gráfica do Cypress e rodar os testes interativamente:

```bash
npx cypress open
Na interface, selecione E2E Testing e escolha o navegador. Em seguida, você poderá selecionar os arquivos de teste (.cy.js) para executá-los.

2. Modo Headless (Via Linha de Comando)
Para rodar os testes em segundo plano (sem interface gráfica), o que é ideal para integração contínua (CI/CD):

Rodar todos os testes:

Bash

npx cypress run
Rodar apenas os testes de frontend:

Bash

npx cypress run --spec "cypress/e2e/frontend/*"
Rodar apenas os testes de API:

Bash

npx cypress run --spec "cypress/e2e/api/*"

🧪 Cenários de Teste Implementados
Testes E2E (Frontend)
Os testes de frontend interagem com a interface do usuário em https://front.serverest.dev/.
Os testes de API interagem diretamente com a API do Serverest em https://serverest.dev/.

✨ Boas Práticas e Padrões Aplicados
Page Object Model (POM): Implementado para os testes de Frontend, melhorando a manutenibilidade e legibilidade dos seletores e interações com a página.
Funções Auxiliares para API: Criação de módulos para encapsular requisições comuns da API, como login e operações CRUD, promovendo reutilização de código.
Dados de Teste (Fixtures): Utilização de arquivos .json em cypress/fixtures para gerenciar dados de teste (usuários, produtos), separando dados da lógica do teste.
Comandos Customizados do Cypress: Extensão do Cypress com comandos personalizados para ações repetitivas (ex: cy.loginApi()).
Variáveis de Ambiente: Utilização de Cypress.env para configurar URLs e outras variáveis, facilitando a execução em diferentes ambientes.
Limpeza de Dados: Uso de before, after, beforeEach e afterEach para configurar o ambiente de teste e limpar dados criados.
Assertivas Claras: As assertivas são específicas e verificam o comportamento esperado (status codes, mensagens de sucesso/erro, presença de elementos).
Estrutura de Pastas Organizada: Segue uma estrutura lógica para separar testes de frontend, API, page objects, etc.
Mensagens de Commit Descritivas: Histórico de commits claro e informativo.

🤝 Contribuição
Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, por favor, abra uma issue ou envie um pull request.

📞 Contato
Bruno Silva 
https://www.linkedin.com/in/brunoqabr/
