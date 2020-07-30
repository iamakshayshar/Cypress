/// <reference types="Cypress" />

// This is testsuite
describe("Testing of EA App", () => {

    beforeEach("Open URL", () => {
        // Navigating to URL
        cy.visit("/");
        // Read data from eauser file in fixture folder and save it in userdetails alias
        cy.fixture("eauser").as("userdetails");
    })

    // This is testcase
    it.only("Application Test End to End", () => {

        // This is the long way of using alias
        // cy.get("#loginLink").then(($link) => {
        //     return $link.text();
        // }).as("linkText");

        // This is the short way of using alias
        cy.get("#loginLink").invoke('text').as("linkText");

        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login");
        })

        cy.contains("Login").click();

        // Verifying URL 
        cy.url().should("include", "/Account/Login");

        // Clearing Username field and typing username
        //cy.get('//*[@id="UserName"]').type("admin");
        cy.get("#UserName").type("admin");

        // Clearing password field and typing password
        cy.get("#Password").clear();
        cy.get("#Password").type("password");

        // Clicking on login button
        cy.get(".btn").click();

        cy.contains("Employee List").click();
        cy.get(".table").find("tr").contains("Ramesh").parent().contains("Benefits").click();
        cy.url().should("include", "Benefit/Details/4");
    })

    // This is testcase
    it("Visit Login Page with Data Driven Testing", () => {

        // This is the short way of using alias
        cy.get("#loginLink").invoke('text').as("linkText");

        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login");
        })
        cy.contains("Login").click();
        // Verifying URL 
        cy.url().should("include", "/Account/Login");

        cy.get("@userdetails").then((userDetails) => {
            cy.get("#UserName").clear();
            cy.get("#UserName").type(userDetails.UserName);
            cy.get("#Password").clear();
            cy.get("#Password").type(userDetails.Password);
        })
    })

    // This is testcase
    it("Visit Login Page with Data Driven Testing & Custom Commands", () => {

        // This is the short way of using alias
        cy.get("#loginLink").invoke('text').as("linkText");

        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login");
        })

        cy.get("@userdetails").then((userDetails) => {
            cy.login(userDetails.UserName, userDetails.Password);
        })
    })

    // This is testcase
    it("Visit Login Page with Data Driven Testing & Custom Commands For Failure", () => {

        // This is the short way of using alias
        cy.get("#loginLink").invoke('text').as("linkText");

        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login_Test");
        })

        cy.get("@userdetails").then((userDetails) => {
            cy.login(userDetails.UserName, userDetails.Password);
        })
    })

    // This is testcase
    it("Visit Login Page with Data from environment variable", () => {

        // This is the short way of using alias
        cy.get("#loginLink").invoke('text').as("linkText");

        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login");
        })

        cy.contains("Login").click();

        cy.get("@userdetails").then((userDetails) => {
            cy.get("#UserName").clear();
            cy.get("#UserName").type(Cypress.env("username"));

            // Clearing password field and typing password
            cy.get("#Password").clear();
            cy.get("#Password").type("password");

            // Clicking on login button
            cy.get(".btn").click();
        })
    })

    after("Log off Application", () => {
        // Clicking on logout button
        cy.get('#logoutForm > .nav > :nth-child(2) > a').click();
    })
})