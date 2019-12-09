// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})

// async function getLocal({ locale }){
//   switch(locale){
//   case 'EN':
//     return import('@amcharts/amcharts4-geodata/lang/EN')
//   case 'ES':
//     return import('@amcharts/amcharts4-geodata/lang/ES')
//   case 'AR':
//     return import('@amcharts/amcharts4-geodata/lang/AR')
//   case 'ZH':
//     return import('@amcharts/amcharts4-geodata/lang/cn_ZH')
//   case 'RU':
//     return import('@amcharts/amcharts4-geodata/lang/RU')
//   case 'FR':
//     return import('@amcharts/amcharts4-geodata/lang/FR')
//   }
// }