/// <reference types="cypress" />
describe("Trello App", () => {
  it("Stub intercept Get call", () => {
    cy.fixture("boardData").then((data) => {
      cy.intercept(
        {
          method: "GET",
          path: "/api/boards",
        },
        data
      ).as("stubGet");
    });

    cy.visit("http://localhost:3000/board");
    cy.wait("@stubGet").then((xhr) => {
      expect(xhr.response.body.length).to.eq(4);
    });
  });
});
