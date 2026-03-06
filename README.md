# Automação de Testes com Cypress

Este projeto demonstra a automação de testes End-to-End (E2E) utilizando Cypress para validar o fluxo de login de uma aplicação web.

O objetivo é praticar automação de testes e aplicar boas práticas utilizadas na área de Quality Assurance (QA), incluindo a organização dos testes com Page Object Model (POM).

## Tecnologias utilizadas

* Cypress
* JavaScript
* Node.js

## Estrutura do projeto

```
cypress
├── e2e
│   └── login.cy.js
├── pages
│   └── loginPage.js
├── fixtures
└── support
```

## Cenários automatizados

* Login com sucesso
* Login inválido
* Login com usuário bloqueado

## Como executar o projeto

1. Clonar o repositório
   git clone https://github.com/stephanycarolinem/qa-automation-cypress.git

2. Instalar as dependências
   npm install

3. Executar os testes

Modo interativo (abrindo o Cypress):
npx cypress open

Modo headless (execução pelo terminal):
npx cypress run

## Objetivo do projeto

Este projeto foi desenvolvido como prática de automação de testes para demonstrar conhecimentos em testes de software, automação com Cypress e organização de testes utilizando Page Object Model.




