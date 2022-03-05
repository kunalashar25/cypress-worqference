/// <reference types="cypress" />

describe("Run same test on multiple environments", () => {
  it("verify login form", () => {
    cy.visit("/login");

    cy.get("#username").type(Cypress.env("username"));
    cy.get("#password").type(Cypress.env("password"));
    cy.get("[type=submit]").click();
  });
});
