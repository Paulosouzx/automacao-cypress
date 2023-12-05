describe('Agrupamento de teste', () => {
  it('CT01 - Verificar o titulo da Pagina - Positivo', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.title().should('eq', 'Swag Labs')
  })
  it('CT02 - Verificar o titulo da Pagina - Negativo', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.title().should('eq', 'swag labs')
  })
})