describe("My First Test", () => {
  it("Visit the page", () => {
    expect(true).to.equal(true);

    cy.visit("http://localhost:3000");
  });
});
