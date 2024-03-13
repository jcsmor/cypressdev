/// <reference types="Cypress" />

describe('My Second Test Suite', function () {
    it('My FirstTest case', function () {
        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // Handle invisible elements, we can use jquery to force their visibility with invoke('show')
        // or we can add force: true to click like this -> cy.contains('Top').click({force: true})
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })
})



