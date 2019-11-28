
describe('Global Search Mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
  })
  it('Search field should be visible', () => {
    cy.visit('/')
    cy.get('.navbar-toggler-icon')
      .click()
    cy.wait(1000)
    cy.get('#globalSearch')
      .should('be.visible')
  })

  it('Global search redirects to cbd search with text', () => {
    cy.visit('/')
    cy.get('.navbar-toggler-icon')
      .click()
    cy.wait(1000)
    cy.get('#globalSearch')
      .type('test')
    cy.get('#pageHeader > div > nav > div.mobile-nav-wrapper.ml-auto.mobile-menu > div > div > div > div > div > div')
      .click()
  })

  it('Global search redirects to cbd search with text', () => {
    cy.url().should('include', 'https://www.cbd.int/kb/Results?q=test')
  })
})

