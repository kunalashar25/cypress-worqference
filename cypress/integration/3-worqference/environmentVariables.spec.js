/// <reference types="cypress" />

describe("Get data from Environment Variables", () => {
  it("verify login form", () => {
    cy.visit("http://the-internet.herokuapp.com/login");

    cy.get("#username").type(Cypress.env("username"));
    cy.get("#password").type(Cypress.env("password"));
    cy.get("[type=submit]").click();
  });
});
