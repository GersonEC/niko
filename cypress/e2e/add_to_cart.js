describe("Add to Cart tests", () => {
  it("render number of items on the cart icon when click on aggiungere al carrello button", () => {
    cy.visit("/");
    cy.get(".product_container > :nth-child(1)").click();
    cy.findByText(/aggiungere al carrello/i).click();
    cy.findByTestId("cart_quantity_text").should("have.text", "1");
  });
});
