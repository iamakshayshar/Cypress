// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

require('@reportportal/agent-js-cypress/lib/commands/reportPortalCommands');
import 'cypress-file-upload';
import '@percy/cypress';

Cypress.Commands.add("login", (username, password) => {
    cy.contains("Login").click();

    cy.get("#UserName").clear();
    cy.get("#UserName").type(username);

    cy.get("#Password").clear();
    cy.get("#Password").type(password);

    cy.url().should("include", "/Account/Login");

    cy.get(".btn").click();
})