/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
        req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
        req.continue((res)=>
        {
            expect(res.statusCode).to.equal(403)
        })
    }).as('dummyUrl')

    cy.get(".btn-primary").click()
    cy.wait('@dummyUrl').then(({request,response})=>
    {
        //cy.get('tbody tr').should('have.length',1)
      
    })
        //cy.get('app-library-dashboard>p').should('have.text', 'Oops only 1 Book available')
        
    })
})