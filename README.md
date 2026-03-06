# Automação de Testes E2E com Cypress

Este projeto demonstra a automação de testes End-to-End (E2E) utilizando Cypress.

O objetivo é validar o fluxo de login de uma aplicação web utilizando boas práticas de automação, incluindo a organização com Page Object Model (POM).

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js

## Estrutura do projeto
cypress
├── e2e
│ └── login.cy.js
│
├── pages
│ └── loginPage.js
│
├── fixtures
└── support


## Cenários automatizados

- Login com sucesso
- Login inválido
- Login com usuário bloqueado

## Como executar o projeto

### 1. Clonar o repositório


git clone https://github.com/stephanycarolinem/qa-automation-cypress.git


### 2. Instalar dependências

npm install

### 3. Executar o Cypress

Modo interativo:

npx cypress open

Modo headless:

npx cypress run


## Objetivo

Este projeto foi desenvolvido como prática de automação de testes para demonstrar conhecimentos em Quality Assurance (QA), automação de testes e organização de testes utilizando Page Object Model.



npx cypress run
