describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //jquery disables hyperlink attribute target and opens page in same tab
        cy.get("#opentab").invoke('removeAttr', 'target').click();
        cy.origin("https://www.qaclickacademy.com", () => {
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should('contain', 'QAClick Academy');
        })
    });
});



