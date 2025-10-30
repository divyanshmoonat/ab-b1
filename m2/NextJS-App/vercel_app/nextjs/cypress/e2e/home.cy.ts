describe('home page', () => {
  it('should have a heading', () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("This is Next app's home page");
  })

  it("should have a link of contact-us page", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href="/contact-us"]').contains("Contact Us");
  });
})

describe("route tests", () => {
  it("should open the contact us page", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href="/contact-us"]').click();
    cy.get("h1").contains("Contact Us Page");
  })
});