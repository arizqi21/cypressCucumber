import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
const component = require('../../components/components')

beforeEach(() => {
  cy.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

Given('A user opens Tokopedia landing page', () => {
  cy.visit('/', {headers: {"Accept-Encoding": "gzip, deflate"} });
})

When('A user search for {string}', (searchQuery) => {
  cy.get(component.searchBar).type(`${searchQuery}{enter}`, {force: true})
})

And('A user click on the top right of product list', () => {
  cy.get(component.topRightProductName).then(($text) => {
    let productName = $text.text()
    cy.wrap(productName).as('productName')
  })

  cy.get(component.topRightProduct).click({waitForAnimations: false})
  cy.get(component.productNameDetail).should('be.visible')
})

Then('The product detail will shown', () => {
  cy.get('@productName').then(productName => {
    cy.get(component.productNameDetail).should(($productNameDetail) => {
      expect($productNameDetail).to.contain(productName)
    })
  })
})