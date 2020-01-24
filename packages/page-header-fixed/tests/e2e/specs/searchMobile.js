
describe('Global Search Mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')
    cy.get('.navbar-toggler')
      .click()
  })
  it('Search field should be visible', () => {
    cy.visit('/')
    cy.get('.navbar-toggler')
      .click()
    cy.wait(1000)
    cy.get('#globalSearch')
      .should('be.visible')
  })


  it('Global search redirects to cbd search with text', () => {
    cy.visit('/')
    cy.get('.navbar-toggler')
      .click()
    cy.wait(1000)
    cy.get('#globalSearch')
      .type('test')
      cy.get('#inputGroupPrepend')
      .click()
      cy.url().should('include', 'https://www.cbd.int/kb/Results?q=test')
  })


})

