/// <reference types="cypress" />

describe("Fetch data from Fixtures", () => {
  it("Verify registration form using fixtures", () => {
    cy.fixture("userData").then((data) => {
      console.log(data);

      cy.visit("http://the-internet.herokuapp.com/login");

      cy.get("#username").type(data.username);
      cy.get("#password").type(data.password);
    });
  });
});
