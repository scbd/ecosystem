
describe('auth module works', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
  })


  it('Log in', () => {
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
      .type(Cypress.env('PASSWORD'))

    cy.get('button')
      .first()
      .click()
    cy.get(':nth-child(2) > a > h3')
      .should('be.visible')
    Cypress.Cookies.preserveOnce('authenticationToken')
  })
  // it('Accounts cookie loaded', () => {
  //   cy.on('uncaught:exception', (err) => {
  //     expect(err.message).to.include('TypeError');
  //     return false;
  //   })

  //   cy.getCookie('authenticationToken')
  //     .should(($token) => {
  //       expect($token.value).to.have.length(256)
  //     })

  // })

  it('User should be logged in', () => {
    cy.visit('http://localhost:8883')
    cy.document()

    cy.wait(2000)
    cy.get('strong')
      .contains('cypress cypress')
  })
})

