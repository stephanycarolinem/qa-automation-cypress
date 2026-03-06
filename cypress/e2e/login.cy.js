describe('Teste de Login', () => {

  it('Login com sucesso', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')

    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.url().should('include', 'inventory')

  })

})

it('Login inválido', () => {

  cy.visit('https://www.saucedemo.com')

  cy.get('#user-name').type('usuario_errado')

  cy.get('#password').type('senha_errada')

  cy.get('#login-button').click()

  cy.get('[data-test="error"]').should('be.visible')

})