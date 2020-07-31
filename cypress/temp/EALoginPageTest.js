/// <reference types="Cypress" />
import { loginpage } from "../../examples/Pages/EALoginPage"

describe("Testing of EA App", () => {

    beforeEach("Open URL", () => {
        cy.visit("http://eaapp.somee.com/");
        cy.fixture("eauser").as("userdetails");
    })

    it("Visit Login Page with Data Driven Testing and Page Object Model", () => {
        cy.get("#loginLink").invoke('text').as("linkText");
        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login");
        })
        cy.contains("Login").click();
        cy.url().should("include", "/Account/Login");

        cy.get("@userdetails").then((userDetails) => {
            loginpage.performLogin(userDetails.UserName, userDetails.Password);
        })
        loginpage.clickLoginButton();
    })

    after("Log off Application", () => {
        cy.get('#logoutForm > .nav > :nth-child(2) > a').click();
    })
})