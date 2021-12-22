// cypress/integration/roadRaces/01_userViewsRoadRacesIndex.spec.js

/// <reference types="cypress" />

context("Road Races Show Page", () => {
  beforeEach(() => {
    cy.visit("/road-races/1")
  })

  it("lists details of the race show page", () => {
    cy.get("#show-header")
      .should("have.text", "Details page for Disney Princess Half Marathon")

    cy.get("#show-miles")
      .should("have.text", "Miles: 13.1")

    cy.get("#show-location")
      .should("have.text", "Location: Orlando, FL")
  })

  it("has a link to go to the new road race index page", () => {
    cy.get("a")
      .should("have.text", "Road Race List")
      .click()

    cy.url().should("eq", "http://localhost:3000/road-races")
  })  
})
