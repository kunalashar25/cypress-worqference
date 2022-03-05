/// <reference types="cypress" />
describe("Trello App", () => {
  it("Spy intercept Get call", () => {
    // intercept command should be written before you load the page
    cy.intercept({
      method: "GET",
      path: "/api/boards",
    }).as("spyGet");

    cy.visit("http://localhost:3000/board");
    cy.wait("@spyGet");
    cy.get("[data-cy=board-item]").should("have.length", 0);
  });

  it("Spy intercept Post call", () => {
    // intercept command should be written before you load the page
    cy.intercept({
      method: "POST",
      path: "/api/boards",
    }).as("spyPost");

    cy.visit("http://localhost:3000/board");

    const boardName = `board ${new Date().getTime()}`;

    cy.get('[data-cy="create-board"]').click();
    cy.get("[data-cy=new-board-input]").type(`${boardName}{enter}`);
    cy.wait("@spyPost").then((xhr) => {
      expect(xhr.response.statusCode).to.eq(201);
      expect(xhr.response.body.name).to.equal(boardName);
    });
  });
});
