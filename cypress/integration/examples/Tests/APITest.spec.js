/// <reference types="Cypress" />

// This is testsuite
describe("TestAPI from ReqRes.in", () => {

    beforeEach("TestDELETE from ReqRes.in", () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            //if you don't want this test to fail on status code. pass the below value
            failOnStatusCode: false
        }).then((x) => {
            expect(x.body).to.be.empty
        })
    })

    it("Test Get Request", () => {
        cy.request("https://reqres.in/api/users/2").its('body').should('have.property', 'data');
    })

    it("TestPOST from ReqRes.in", () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((res) => {
            expect(res.body).has.property("name", "morpheus");
        })
    })

    // If we add it.only; this means that only this test will execute
    it('API testing', () => {
        cy.request({
            method: 'POST',
            url: 'http://eaapp.somee.com/Account/Login',
            body: {
                "__RequestVerificationToken": "jJ27CGSB6SHC24F0oV5nGIcKmDPqG2WfwOCDZxTUIhJ8Tk9TiSYlzhrzuhP5Ct2rHTiOY46WawRVGy6qanY18HsdbKEeK0TqWjgOY9b6RZE1",
                "UserName": "admin",
                "Password": "password",
                "RememberMe": "false"
            },
            failOnStatusCode: false
        }).then(($res) => {
            expect($res.status).to.eql(500);
            expect($res.body).to.contain('<i>The required anti-forgery cookie &quot;__RequestVerificationToken&quot; is not present.</i>')
        })
    });
})