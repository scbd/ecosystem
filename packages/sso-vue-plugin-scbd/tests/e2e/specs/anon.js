// https://docs.cypress.io/api/introduction/api.html

describe('Anon user', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.get(':nth-child(1) > [style="text-align: left;"]')
    .contains('1')
  })
})
