/// <reference types="cypress" />

describe('Fórum', () => {
  it('Deveria visualizar lista de fóruns', () => {
    //Acessar a página
    cy.visit('/forums')

    //Validar se tem o texto
    cy.get('[aria-label="Título"]').should('contain.text', 'Lorem Ipsum is simpl')
  })

  it('Deveria visualizar comentários', () => {
    //Acessar a página
    cy.visit('/forums')

    //Clicar no ícone de comentários
    cy.get('[aria-label="Comentários"]').click()

    //Verificar texto ao expandir
    cy.get('.MuiCollapse-wrapperInner div:first > h5').should('have.text', 'Comentários')
  })

  it('Deveria cadastrar novo fórum', () => {
    //Acessar a página
    cy.visit('/forums')

    //Esperar carregar os componentes
    cy.get('[data-testid="loadingContainer"').should('not.exist')

    //Clicar no botão de cadastrar
    cy.get('[aria-label="Adicionar"]').click()

    //Preencher o fomulário
    cy.get('[placeholder="Título"]').type('Título do formulário')
    cy.get('[placeholder="Detalhes"]').type('Detalhes do formulário')
    cy.get('button').contains('Adicionar').click()
    cy.get('[placeholder="Tecnologia"]').type('Tecnologia do formulário')

    //Clicar no botão cadastrar
    cy.get('button[type=submit]').click()

    //Validar exibição da mensagem de sucesso
    cy.get('#notistack-snackbar').should('have.text', 'Adicionado com sucesso!')

    //Validar se inseriu o elemento na lista
    cy.get('[data-testid="gridContainer"]').contains('Título do formulário')
  })
})
