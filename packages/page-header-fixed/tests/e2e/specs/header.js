describe('The SCBD Header Desktop', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
  })
  it('Header Element Loads', () => {
    cy.visit('/')
    cy.get('header')
      .should('have.id', 'pageHeader')
  })
  it('It should contain 2 navs', () => {
    cy.get('nav')
      .should(($nav) => {
        expect($nav).to.have.length(2)
      })

    cy.get('.dropdown-toggle')
      .should(($nav) => {
        expect($nav).to.have.length(2)
      })
  })

  it('hover drop downs 1 is functional', () => {
    cy.get('#pageHeader > div > nav.navbar.navbar-expand-lg.top-nav > div > div > ul.navbar-nav.mr-auto > li:nth-child(1)')
      .trigger('mouseover')

    cy.get('.dropdown-menu')
      .should('be.visible')
      .find('.dropdown-item')
      .should(($a) => {
        assert.isTrue($a.length > 3, 'links are present')
      })

    cy.get('#pageHeader > div > nav.navbar.navbar-expand-lg.top-nav > div > div > ul.navbar-nav.mr-auto > li:nth-child(1)')
      .trigger('mouseleave')
  })

  it('hover drop downs 2 is functional', () => {
    cy.get('#pageHeader > div > nav.navbar.navbar-expand-lg.top-nav > div > div > ul.navbar-nav.mr-auto > li:nth-child(2)')
      .trigger('mouseover')

    cy.get('.dropdown-menu')
      .should('be.visible')
      .find('.dropdown-item')
      .should(($a) => {
        assert.isTrue($a.length > 3, 'links are present')
      })

    cy.get('#pageHeader > div > nav.navbar.navbar-expand-lg.top-nav > div > div > ul.navbar-nav.mr-auto > li:nth-child(2)')
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
    cy.get('#pageHeader > div > nav.navbar.navbar-expand-lg.top-nav > div > div > ul.navbar-nav.mr-auto > li:nth-child(1)')
      .trigger('mouseover')
    cy.get('#pageHeader > div > nav.navbar.navbar-expand-lg.top-nav > div > div > ul.navbar-nav.mr-auto > li:nth-child(2)')
      .trigger('mouseover')
    cy.wait(1000)
    cy.screenshot('hover')
  })
})