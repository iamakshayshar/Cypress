/// <reference types="Cypress" />

// This is testsuite
describe("Testing fileupload via fineuploader.com", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    beforeEach("Open URL", () => {
        cy.visit("https://fineuploader.com/demos.html");
    })

    it("Uploading file and validating", () => {
        const yourFixturePath = 'eauser.json';
        cy.get('.buttons > .qq-upload-button-selector > input').attachFile(yourFixturePath);
    })
});