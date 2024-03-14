//cypress - Spec
describe('My First Test Suite', () => {

  it('My first test case', () => {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //cy.get('.products .product').should('have.length', 4)  //tagName[attribute = value]
    // console.log() -> prints on dev tools log              // input[type='search']
    // we can use jquery to get only the visible products
    // jquery--> cy.get('.product:visible').should('have.length', 4)
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length', 4)
    //cy.get('.products').find('.product').eq(2).find('div.product-action button').click()
    //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const vegText = $el.find('h4.product-name').text()
      if (vegText.includes("Carrot")) {
        $el.find('div.product-action button').click()
      }
    })
    //to print in log     
    cy.get('.brand').then(function (logoelement) {
      cy.log(logoelement.text())
    })
    // assert text
    cy.get('.brand').should('have.text', 'GREENKART')
    //cy.log(cy.get('.brand').text()) - does not work because text is not cypress method
  })
})