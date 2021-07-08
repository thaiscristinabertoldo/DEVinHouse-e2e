/// <reference types="cypress" />

describe('Login', () => {
  it('efetuar login', () => {
    //Acessar a página
    cy.visit('/login')

    //Informar login senha
    cy.get('input[name=email]').type('thais@teste.com')
    cy.get('input[name=password]').type('teste123')

    //Clicar no botão enviar
    cy.get('button[type=submit]').click()

    //Verificar se redirecionou para a url de foruns
    cy.url().should('include', '/forums')
  })

  it('Acessar link para criar conta', () => {
    //Acessar a página
    cy.visit('/login')

    //Clicar no link de criar conta
    cy.get('a[href="/signIn"]').click()

    //Verificar se redirecionou para a url de signIn
    cy.url().should('include', '/signIn')
  })
})
