// https://docs.cypress.io/api/introduction/api.html

it('smoke test, object obtain from get has 6 keys', () => {
  cy.visit('/')
  cy.wait(2000)

  cy.get('#key-length')
  .contains('6')
  cy.screenshot('load-http')
})
