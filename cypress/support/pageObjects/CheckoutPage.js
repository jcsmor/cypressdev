class CheckoutPage {
    checkOutProductPrice() {
        return cy.get('tr td:nth-child(4) strong')
    }

    checkOutTotal() {
        return cy.get('h3 strong')
    }
}

export default CheckoutPage;
