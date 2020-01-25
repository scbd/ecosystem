// https://docs.cypress.io/api/introduction/api.html

describe('Widget loads and contains amcharts map', () => {
  it('Visits the app root url', () => {
    cy.visit('/')

    cy.get('[transform="translate(903,0)"] > [fill="#d9d9d9"] > path')
    .should('be.visible')
  })
})
