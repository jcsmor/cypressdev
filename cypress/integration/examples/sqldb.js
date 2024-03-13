/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {
        cy.log("hello")
        cy.sqlServer("select * from Persons").then(function (result) {
            cy.log(result[0][1])
        })
    })
})