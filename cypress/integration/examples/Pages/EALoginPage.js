/// <reference types="Cypress" />

export class EALoginPage {

    performLogin(username, password) {
        cy.get('#UserName').type(username);
        cy.get('#Password').type(password, { log: false });
    }

    clickLoginButton(){
        cy.get('.btn').click();
    }
}

export const loginpage = new EALoginPage();