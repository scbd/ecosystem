// https://docs.cypress.io/api/introduction/api.html

describe('Anon user', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.wait(2000)
  })
})
