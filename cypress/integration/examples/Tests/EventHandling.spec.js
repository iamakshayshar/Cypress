/// <reference types="Cypress" />

describe("Testing of EA App", () => {

    beforeEach("Open URL", () => {
        cy.visit("http://executeautomation.com/demosite/Login.html");
    })

    // This test will automatically accept the popup but will show error in console logs
    it("Perfom Login", () => {
        cy.get("[name='UserName']").type("admin");
        cy.get("[name='Password']").type("admin");
        cy.get(':nth-child(3) > input').click();

        cy.get("[name='generate']").click();
    })

    // In this test we will handle the popup exceptio
    it("Perfom Login", () => {
        cy.get("[name='UserName']").type("admin");
        cy.get("[name='Password']").type("admin");
        cy.get(':nth-child(3) > input').click();

        cy.get("[name='generate']").click();

        cy.on("window:confirm", (str) => {
            expect(str).to.eq('You generated a Javascript alert')
            // if we return false, it will click cancel button in alert
            return true;
        })
    })

})