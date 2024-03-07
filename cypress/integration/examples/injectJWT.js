// <reference types="cypress" />

//const neatCSV = require('neat-csv')

import neatCSV from 'neat-csv';

let productName

describe('JWT Session', () => {

  it('is logged in through local storage', async () => {
    cy.LoginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client",
        {
          onBeforeLoad: function (window) {
            window.localStorage.setItem('token', Cypress.env('token'))
          }
        })
    })

    cy.get(".card-body b").eq(0).then(function (ele) {
      productName = ele.text();
    })

    cy.get(".card-body button:last-of-type").eq(0).click();

    cy.get("[routerlink*='cart']").click();

    cy.contains("Checkout").click();

    cy.get("[placeholder*='Country']").type("port")

    cy.get('.ta-results button').each(($el, index, $list) => {
      if ($el.text() === " Portugal") {
        cy.wrap($el).click()
      }
    })

    cy.get(".action__submit").click();

    cy.wait(2000)

    cy.get(".order-summary button").eq(0).click();



    cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_anshika.csv").then(async (text) => {

      const csv = await neatCSV(text)

      console.log(csv)

      const actualProductCSV = csv[0]["Product Name"]

      expect(productName).to.equal(actualProductCSV)

    })

  })

})

