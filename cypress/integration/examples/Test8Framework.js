/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'
import 'cypress-iframe'
describe('My Test Suite', function () {

  before(function () {
    // runs once before all tests in the block
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })

  it('My FirstTest case', function () {
    const homePage = new HomePage()
    const productPage = new ProductPage()
    const checkoutPage = new CheckoutPage()
    cy.visit(Cypress.env('url') + "/angularpractice/")
    //cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneaur().should('be.disabled')
    // cy.pause() // -> to debug
    homePage.getShopTab().click()
    //Cypress.config('defaultCommandTimeout',8000) - in case we dont want to change the global value
    // this timeout will be aplied only on this spec
    this.data.productName.forEach(function (element) {
      console.log(element)
      cy.selectProduct(element)
    });
    productPage.checkOutButton().click()
    var sum = 0

    checkoutPage.checkOutProductPrice().each(($el, index, $list) => {
      const amount = $el.text()
      var res = amount.split(" ")
      res = res[1].trim()
      sum = Number(sum) + Number(res)

    }).then(function () {
      cy.log(sum)
    })
    checkoutPage.checkOutTotal().then(function (element) {
      const amount = element.text()
      var res = amount.split(" ")
      var total = res[1].trim()
      expect(Number(total)).to.equal(sum)
    })
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function (element) {
      const actualText = element.text()
      expect(actualText.includes("Success")).to.be.true
    })
  })

  it('My SecondTest case', function () {
    //Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // Handle invisible elements, we can use jquery to force their visibility with invoke('show')
    // or we can add force: true to click like this -> cy.contains('Top').click({force: true})
    cy.get('div.mouse-hover-content').invoke('show') //jquery method show
    cy.contains('Top').click()
    cy.url().should('include', 'top')
  })



})