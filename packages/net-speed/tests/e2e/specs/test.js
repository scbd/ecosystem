// https://docs.cypress.io/api/introduction/api.html

describe('get net speed', () => {
  it('its tested on 4g ', () => {
    cy.visit('/')
    cy.contains('h6','4g')
  })
})

