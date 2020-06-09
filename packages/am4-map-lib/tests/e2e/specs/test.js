// https://docs.cypress.io/api/introduction/api.html

describe('am4-map-lib test', () => {
  it('export required classes and function', () => {
    cy.visit('/')
    cy.contains('h1', 'am4-map-lib')
    cy.contains('h6','["createFromConfig","useTheme","percent","TextLink","Button","Sprite","MouseCursorStyle","MapChart","projections","am4themesAnimated","english","spanish","arabic","french","russian","chinese","worldGeoData"]')
  })
})

