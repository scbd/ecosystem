
describe('Login Nav', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')

    Cypress.Cookies.preserveOnce('authenticationToken')
  })
  it('it should open accounts.cbd.int', () => {
    cy.visit('/')
    cy.get('.navbar-toggler-icon')
      .click()
    cy.get('#accountsLink')
      .should('be.visible')
  })

  it('It should open accounts', () => {
    cy.on('uncaught:exception', (err) => {
      expect(err.message).to.include('TypeError');
      return false;
    })
    cy.wait(3000)
    cy.visit('https://accounts.staging.cbd.int')
    cy.wait(3000)


    cy.get('#inputEmail')
      .type('cypress@houlahan.ca')

    cy.get('#inputPassword')
      .type(Cypress.env('PASSWORD'))

    cy.get('button')
      .first()
      .click()
    cy.get(':nth-child(2) > a > h3')
      .should('be.visible')
  })
  it('It should have an accounts cookie', () => {
    cy.on('uncaught:exception', (err) => {
      expect(err.message).to.include('TypeError');
      return false;
    })

    cy.getCookie('authenticationToken')
      .should(($token) => {
        expect($token.value).to.have.length(256)
      })
  })
  it('User should be logged in', () => {
    cy.visit('/')
    cy.get('.navbar-toggler-icon')
      .click()
    cy.document()

    cy.wait(1000)
    cy.get('#header > div > nav > div.mobile-nav-wrapper.ml-auto.mobile-menu > div > div > div > ul:nth-child(4) > li > a')
      .contains('cypress cypress')
  })
  it('Account dropdown works', () => {
    cy.visit('/')
    cy.get('.navbar-toggler-icon')
      .click()
    cy.get('#header > div > nav > div.mobile-nav-wrapper.ml-auto.mobile-menu > div > div > div > ul:nth-child(4) > li > a')
      .trigger('mouseover')
    cy.get('#header > div > nav > div.mobile-nav-wrapper.ml-auto.mobile-menu > div > div > div > ul:nth-child(4) > li > div > div')
      .should('be.visible')
    //   .children(($a) => {
    //     assert.isTrue($a.length > 3, 'links are present')
    //   })
  })
  it('Clean Cookies', () => {
    cy.on('uncaught:exception', (err) => {
      expect(err.message).to.include('TypeError');
      return false;
    })
    cy.wait(2000)
    cy.visit('https://accounts.staging.cbd.int')
    cy.wait(2000)
    cy.clearCookie('authenticationToken')
  })
})

