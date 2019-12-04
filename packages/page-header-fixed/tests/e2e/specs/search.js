
describe('Global Search Desktop', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
  })
  it('Search field should be visible', () => {
    cy.visit('/')
    cy.get('#globalSearch')
      .should('be.visible')
  })

  it('Global search redirects to cbd search with text', () => {
    cy.visit('/')
    cy.get('#globalSearch')
      .type('test')
    cy.get('#block-topsearchblock > div > div > div')
      .click()
  })

  it('Global search redirects to cbd search with text', () => {
    cy.url().should('include', 'https://www.cbd.int/kb/Results?q=test')
  })
})

