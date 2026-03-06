import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('Login', () => {

  it('Login com sucesso', () => {

    loginPage.visit()
    loginPage.fillUsername('standard_user')
    loginPage.fillPassword('secret_sauce')
    loginPage.submit()

  })

  it('Login inválido', () => {

    loginPage.visit()
    loginPage.fillUsername('usuario_errado')
    loginPage.fillPassword('senha_errada')
    loginPage.submit()

    cy.get('[data-test="error"]').should('be.visible')

  })

})