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
});
