// https://docs.cypress.io/api/introduction/api.html

describe('locale service', () => {
  it('loads and has 9 functions', () => {
    cy.visit('/')
    cy.contains('h1', 'Locale service functions: 9')
    cy.get('#functions')
    .should(($el) => {
      expect($el).to.have.text('9')
    })
  })
  it('scbdCMSLocale', () => {
    cy.visit('/')
    cy.get('#scbdCMSLocale')
    .should(($el) => {
      expect($el).to.have.text('')
    })
  })
  it('html5Locale', () => {
    cy.visit('/')
    cy.get('#html5Locale')
    .should(($el) => {
      expect($el).to.have.text('en')
    })
  })
  it('legacyHtmlLocale', () => {
    cy.visit('/')
    cy.get('#legacyHtmlLocale')
    .should(($el) => {
      expect($el).to.have.text('')
    })
  })
  it('legacyBrowserLocale', () => {
    cy.visit('/')
    cy.get('#legacyBrowserLocale')
    .should(($el) => {
      expect($el).to.have.text('en-US')
    })
  })
  
  it('browserLocale', () => {
    cy.visit('/')
    cy.get('#browserLocale')
    .should(($el) => {
      expect($el).to.have.text('en-US')
    })
  })
  it('#get', () => {
    cy.visit('/')
    cy.get('#get')
    .should(($el) => {
      expect($el).to.have.text('en')
    })
  })
  it('#getUN', () => {
    cy.visit('/')
    cy.get('#getUN')
    .should(($el) => {
      expect($el).to.have.text('en')
    })
  })
  it('#getUnLocale', () => {
    cy.visit('/')
    cy.get('#getUnLocale')
    .should(($el) => {
      expect($el).to.have.text('en')
    })
  })
})
