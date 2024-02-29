// Dealing with iframes need to intsll and import cypress-iframe, the reference types is to have auto code complete
// npm install -D cypress-iframe

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'
 
describe('My Iframe Test Suite', function() 
{
    it('My first case',function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Getting a value with prop method
        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.log(url)
            //cy.visit(url)
        })
    })



    it('My Iframe case',function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)

    })
 
})
 
 
 
