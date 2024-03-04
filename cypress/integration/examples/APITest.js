/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
    cy.request('POST','http://216.10.245.166/Library/Addbook.php', {
        "name":"Learn Appium Automation with Javaxx",
        "isbn":"bcdxx",
        "aisle":"22721",
        "author":"John foexx"
        }).then(function(response){
                console.log(response)
            expect(response.body).to.have.property("Msg","successfully added")

        })

    // cy.request('GET',': /Library/GetBook.php?AuthorName=somename').then(function(response){
    //         console.log(response)
    
    //         //expect(response.body).to.have.property("Msg","successfully added")
    
    //     }) 

    // cy.request('GET',': /Library/GetBook.php?ID=3389').then(function(response){
    //         console.log(response)
    
    //         //expect(response.body).to.have.property("Msg","successfully added")
    
    //     }) 

    // cy.request('DELETE','http://216.10.245.166/Library/DeleteBook.php', {
    // "ID" : "a23h345122332"
    // }).then(function(response){
    //     console.log(response)

    //     //expect(response.body).to.have.property("Msg","successfully added")

    // })   

    })
})