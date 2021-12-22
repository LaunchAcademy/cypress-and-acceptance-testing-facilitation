// cypress/integration/roadRaces/01_userViewsRoadRacesIndex.spec.js

/// <reference types="cypress" />

context("Road Races Index", () => {
  beforeEach(() => {
    cy.visit("/road-races")
  })

  it("has a header", () => {
    // this is an example test, and not representative of best practices. focus on dynamic elements
    cy.get("h1").should("have.text", "Our Favorite Road Races").debug()
    // even if we wanted to keep this test, we would want to move it to the following it block
  })

  it("lists all road races", () => {
    // retrieve element that has a className of "road-races". find the first li of the retrieved DOM result. 
    cy.get(".road-races")
      .find("li")
      .first()
      .should("have.text", "Disney Princess Half Marathon - 13.1 Miles")
    // we can chain selectors to get the element we wish to test
    
    cy.get(".road-races")
      .find("li")
      .eq(1)
      .should("have.text", "Moab Trail Marathon - 26.2 Miles")
  })

  it("has a link to go to the new road race form", () => {
    cy.get("a")
      .should("have.text", "Add a new Road Race")
      .click()

    cy.url().should("eq", "http://localhost:3000/road-races/new")
  })
})
