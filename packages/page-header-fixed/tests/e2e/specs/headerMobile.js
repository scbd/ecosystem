describe('The SCBD Header Mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')
    cy.get('.navbar-toggler-icon')
      .click()
  })

  it('Header Element Loads', () => {
    cy.visit('/')
    cy.get('header')
      .should('have.id', 'pageHeader')
  })

  it('Menu is visible on click', () => {
    cy.get('.mobile-nav-wrapper > .navbar-collapse')
      .should('be.visible')
  })

  it('Main menu is visible, has items', () => {
    cy.get('.navbar-collapse > .ml-auto')
      .should('be.visible')
  })

  it('Top menu one is visible, opens, has items', () => {
    cy.get('.mobile-top-menu > .mr-auto > :nth-child(1) > .nav-link')
      .should('be.visible')
      .click()
    cy.get('#pageHeader > div.navbar-wrapper.mobile-only > nav > div.mobile-nav-wrapper.ml-auto.mobile-menu > div > div > div > ul.navbar-nav.mr-auto > li:nth-child(1)')
      .should('be.visible')

    cy.get('.dropdown-item-label')
      .should(($a) => {
        expect($a).to.have.length(5)
      })
    cy.get('.mobile-top-menu > .mr-auto > :nth-child(1) > .nav-link')
      .click()
    cy.get('#pageHeader > div.navbar-wrapper.mobile-only > nav > div.mobile-nav-wrapper.ml-auto.mobile-menu > div > div > div > ul.navbar-nav.mr-auto > li:nth-child(1)')
      .should('not.have.descendants', '#pageHeader > div.navbar-wrapper.mobile-only > nav > div.mobile-nav-wrapper.ml-auto.mobile-menu > div > div > div > ul.navbar-nav.mr-auto > li:nth-child(1) > div > div > a')
  })

  it('Top menu one is visible, opens, has items', () => {
    cy.get('.mobile-top-menu > .mr-auto > :nth-child(2) > .nav-link')
      .should('be.visible')
      .click()

    cy.get('#pageHeader > div.navbar-wrapper.mobile-only > nav > div.mobile-nav-wrapper.ml-auto.mobile-menu > div > div > div > ul.navbar-nav.mr-auto > li:nth-child(2)')
      .should('be.visible')

    cy.get('.dropdown-item-label')
      .should(($a) => {
        expect($a).to.have.length(6)
      })

    cy.get('.mobile-top-menu > .mr-auto > :nth-child(2) > .nav-link')
      .click()
    cy.get('#pageHeader > div.navbar-wrapper.mobile-only > nav > div.mobile-nav-wrapper.ml-auto.mobile-menu > div > div > div > ul.navbar-nav.mr-auto > li:nth-child(2)')
      .should('not.have.descendants', '#pageHeader > div.navbar-wrapper.mobile-only > nav > div.mobile-nav-wrapper.ml-auto.mobile-menu > div > div > div > ul.navbar-nav.mr-auto > li:nth-child(1) > div > div > a')
  })
  it('Login is visible', () => {
    cy.get('#accountsLink-SNE')
      .should('be.visible')
  })

  it('Search is visible', () => {
    cy.get('#globalSearch')
      .should('be.visible')
  })
})