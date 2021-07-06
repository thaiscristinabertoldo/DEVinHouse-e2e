/// <reference types="cypress" />

describe('Fórum', () => {
  it('visualizar fóruns', () => {
    //Acessar a página
    cy.visit('/forums')

    //Validar se tem o texto
    cy.get('h5').should('contain.text', 'Lorem Ipsum is simply dummy text?')
  })

  it('visualizar comentários', () => {
    //Acessar a página
    cy.visit('/forums')

    //Validar se tem o texto
    cy.get('h5').should('contain.text', 'Lorem Ipsum is simply dummy text?')
  })
})
