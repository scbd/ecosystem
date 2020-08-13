describe('The SCBD Header Desktop', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
  })
  it('Header Element Loads', () => {
    cy.visit('/')
    cy.get('header')
      .should('have.id', 'pageHeaderFixed')
  })
  it('It should contain 1 navs', () => {
    cy.get('nav')
      .should(($nav) => {
        expect($nav).to.have.length(1)
      })
    cy.get('#information-SNE > .nav-link')
      .should('be.visible')

    cy.get('#aboutTheSecretariatP1-SNE > .nav-link')
      .should('be.visible')
  })

  it('hover drop downs 1 is functional', () => {
    cy.get('#information-SNE > .nav-link')
      .trigger('mouseover')

    cy.get('.dropdown-menu')
      .should('be.visible')
      .find('.dropdown-item')
      .should(($a) => {
        assert.isTrue($a.length > 3, 'links are present')
      })

    cy.get('#information-SNE > .nav-link')
      .trigger('mouseleave')
  })

  it('hover drop downs 2 is functional', () => {
    cy.get('#aboutTheSecretariatP1-SNE > .nav-link')
      .trigger('mouseover')

    cy.get('.dropdown-menu')
      .should('be.visible')
      .find('.dropdown-item')
      .should(($a) => {
        assert.isTrue($a.length > 3, 'links are present')
      })

    cy.get('#aboutTheSecretariatP1-SNE > .nav-link')
      .trigger('mouseleave')
  })

  it('it should open accounts.cbd.int', () => {
    cy.get('#accountsLink-SNE')
      .should('be.visible')
  })
  it('Search is visible', () => {
    cy.get('#globalSearch')
      .should('be.visible')
  })
  it('it takes screen shots', () => {
    cy.screenshot('header')
    cy.wait(1000)
    cy.get('#information-SNE > .nav-link')
      .trigger('mouseover')
    cy.get('#aboutTheSecretariatP1-SNE > .nav-link')
      .trigger('mouseover')
    cy.wait(1000)
    cy.screenshot('hover')
  })
})