/// <reference types="cypress" />

describe("Login Page", () => {
  it("verify login form", () => {
    cy.visit("http://the-internet.herokuapp.com/login");

    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("[type=submit]").click();
  });
});
