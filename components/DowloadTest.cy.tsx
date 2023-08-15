import React from "react";
import Download from "./Dowload";

describe("<Download />", () => {
  beforeEach(() => {
    cy.mount(<Download />);
  });

  it("renders and has three buttons", () => {
    cy.get("button").should("have.length", 3);
  });

  it("each button has os listed", () => {
    const supportedOs = ["macOS", "Windows", "Linux"];

    cy.get("button").each((button) => {
      cy.get(button as any)
        .find("span")
        .should(($span) => {
          const text = $span.text();
          expect(supportedOs).to.include(text);
        });
    });
  });
});