/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe('Changing Box colors', function () {
    it('Changing box to Yellow', function () {
        cy.visit('https://codepen.io/heliokroger/pen/abRVqja')
        cy.contains("button", "Yellow").click()
        cy.get("div[class*='yellow']").should('be.visible')
    })

    it('Changing box to Blue', function () {
        cy.visit('https://codepen.io/heliokroger/pen/abRVqja')
        cy.contains("button", "Blue").click()
        cy.get("div[class*='blue']").should('be.visible')
    })
})

// describe('Changing Box colors', function () {
//     it('Changing box to Yellow', function () {
//         cy.visit('https://codepen.io/heliokroger/pen/abRVqja')
//         cy.frameLoaded('#result')
//         cy.iframe().contains("button", "Yellow").click()
//         cy.iframe().get("div[class*='yellow']").should('be.visible')
//     })
// })