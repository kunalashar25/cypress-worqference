describe("Check API Calls", function () {
  it("Get all users", function () {
    cy.request({ method: "GET", url: "https://reqres.in/api/users" }).then(
      (response) => {
        expect(response.status).to.equal(200);
      }
    );
  });

  it("Create a new users", function () {
    const userData = {
      name: "Kunal",
      job: "Instructor",
    };

    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: userData,
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).property("id").not.to.eq(0);
      expect(response.body).property("name").to.eq(userData.name);
      expect(response.body).property("job").to.eq(userData.job);
    });
  });
});
