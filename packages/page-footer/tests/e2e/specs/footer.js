describe('The SCBD Header Desktop', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
  })
  it('Header Element Loads', () => {
    cy.visit('/')
    cy.get('footer')
      .should('have.id', 'pageFooter')
  })
  it('It should contain 8 navs', () => {
    cy.get('nav')
      .should(($nav) => {
        expect($nav).to.have.length(8)
      })
  })

  it('it takes screen shots', () => {
    cy.screenshot('footer')
  })
})