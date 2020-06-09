// https://docs.cypress.io/api/introduction/api.html

describe('Accounts for EU', () => {
  it('has EU button and highlights eu when clicked', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.screenshot('eu-button')
    cy.get('image')
      .click()
    cy.get('#app > div > div > div > svg > g > g:nth-child(2) > g:nth-child(1) > g:nth-child(2) > g:nth-child(1) > g:nth-child(2) > g:nth-child(1) > g > g:nth-child(8) > g > g:nth-child(3) > g > g > g > text > tspan')
    .contains('European Union')
    cy.screenshot('eu-button-clicked')
  })
})