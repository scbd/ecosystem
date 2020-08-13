describe('The SCBD Header Mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')
    cy.get('.navbar-toggler')
      .click()
  })

  it('Header Element Loads', () => {
    cy.visit('/')
    cy.get('header')
      .should('have.id', 'pageHeaderFixed')
  })

  it('Menu is visible on click', () => {
    cy.get('.mobile-nav-wrapper > .navbar-collapse')
      .should('be.visible')
  })

  it('Main menu is visible, has items', () => {
    cy.get('.navbar-collapse > .ml-auto')
      .should('be.visible')
  })

  it('The main menu should be visible', () => {
    cy.get('.mobile-top-menu > .mr-auto > :nth-child(1) > .nav-link')
      .should('be.visible')
      .click()
    cy.get('#biodiversityConvention-WPH-SNE')
      .should('be.visible')
  })

  it('Info menu should be visible and expand when clicked', () => {


    cy.get('#information-SNE > .nav-link')
      .should('be.visible')
      .click()

    cy.get('#contactUs-SNE')
      .should('be.visible')

    cy.get('#information-SNE > .nav-link')
      .should('be.visible')
      .click()
  })

  it('About menu should be visible and expand when clicked', () => {


    cy.get('#aboutTheSecretariatP1-SNE > .nav-link')
    .should('be.visible')
    .click( )

    cy.wait(500)

    cy.get('#staff-SNE')
    .should('be.visible')


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