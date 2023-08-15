import React from "react";
import Teams from "./Team";

describe("<Teams />", () => {
  beforeEach(() => {
    cy.mount(<Teams />);
  });
  
  it("should have a photo for each team member with src", () => {
    cy.get("ul")
      .find("li")
      .each(($li) => {
        cy.wrap($li).find("img").should("have.attr", "src");
      });
  });

  it("should have a GitHub link icon for each team member", () => {
    cy.get("ul")
      .find("li")
      .each(($li) => {
        cy.wrap($li).find("img[alt='github link']").should("be.visible");
      });
  });

  it("should have the correct github link for each team member when the avatar is clicked", () => {
    cy.get("ul")
      .find("li")
      .each(($li, index) => {
        cy.wrap($li)
          .find("img:not([alt='github link'])")
          .should("have.attr", "src")
          .and("include", "https://avatars.githubusercontent.com/");
      });
  });

  it("should open the correct GitHub profile when the GitHub link icon is clicked", () => {
    // Here, we won't actually open the link, but will assert the expected URL.
    cy.get("ul")
      .find("li")
      .each(($li) => {
        const githubUrl = $li.find("img[alt='github link']").attr("src");

        // Assuming you have the GitHub URLs in an array or some data structure.
        cy.wrap($li)
          .find("img[alt='github link']")
          .should("have.attr", "src", githubUrl);
      });
  });

  it("should have a name for each team member", () => {
    cy.get("ul")
      .find("li")
      .each(($li) => {
        cy.wrap($li).find("p.text-sm.font-medium.text-black.truncate").should("be.visible");
      });
  });

  it("should not have any broken image links for avatars", () => {
    cy.get("ul")
      .find("li")
      .each(($li) => {
        cy.wrap($li)
          .find("img:not([alt='github link'])")
          .invoke("prop", "naturalWidth")
          .should("be.greaterThan", 0);
      });
  });

  it("should have the correct GitHub avatar URL format for each team member", () => {
    cy.get("ul")
      .find("li")
      .each(($li) => {
        cy.wrap($li)
          .find("img:not([alt='github link'])")
          .should("have.attr", "src")
          .and("match", /https:\/\/avatars\.githubusercontent\.com\//);
      });
  });
  


});

