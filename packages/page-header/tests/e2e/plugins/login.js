
describe('SSO detects user already signed on', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
    Cypress.Cookies.preserveOnce('authenticationToken')
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
  it('Login link should be visible', () => {
    cy.visit('/')
    cy.get('#accountsLink-SNE')
      .should('be.visible')
  })

  it('It should open accounts', () => {
    cy.on('uncaught:exception', (err) => {
      expect(err.message).to.include('TypeError');
      return false;
    })
    cy.wait(2000)
    cy.visit('https://accounts.staging.cbd.int')
    cy.wait(2000)
    cy.get('#inputEmail')
      .type('cypress@houlahan.ca')

    cy.get('#inputPassword')
      .type('yoyoMA5555')

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
    cy.document()

    cy.wait(1000)
    cy.get('#pageHeader > div > nav.navbar.navbar-expand-lg.top-nav > div > div > ul:nth-child(2) > li > a')
      .contains('cypress cypress')
  })
  it('Account dropdown works', () => {
    cy.get('#pageHeader > div > nav.navbar.navbar-expand-lg.top-nav > div > div > ul:nth-child(2) > li > a')
      .trigger('mouseover')
    cy.get('#pageHeader > div > nav.navbar.navbar-expand-lg.top-nav > div > div > ul:nth-child(2) > li > div > div')
      .should('be.visible')
      .children(($a) => {
        assert.isTrue($a.length > 3, 'links are present')
      })
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

