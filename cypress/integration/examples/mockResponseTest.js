/// <reference types="Cypress" />

describe('My First test Suit', function()
{




    it('My first test case', function(){

        cy.visit('https://www.rahulshettyacademy.com/angularAppdemo/')
        cy.get('.btn-primary').click();

        cy.intercept(
            {
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                statusCode: 200,
                body:
                [{
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                }]
            }
        ).as('bookretrievals')

        cy.wait('@bookretrievals')
        cy.get('app-library-dashboard>p').should('have.text', 'Oops only 1 Book available')
        
        

        
        

    })


})