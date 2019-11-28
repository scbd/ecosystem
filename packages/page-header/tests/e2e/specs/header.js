describe('The SCBD Sub Header Desktop', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
  })
  it('Sub Header Element Loads', () => {
    cy.visit('/')
    cy.get('header')
      .should('have.id', 'pageSubHeader')
  })
  it('It should contain 1 nav', () => {
    cy.get('nav')
      .should(($nav) => {
        expect($nav).to.have.length(1)
      })
  })

  it('it takes screen shots', () => {
    cy.screenshot('header')
    cy.wait(1000)
  })
})