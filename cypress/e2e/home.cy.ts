import {
  mockProfileImage,
  visitAuthorizedPage,
} from "./utils/mocks";

describe("Home page", (): void => {
  beforeEach(() => {
    cy.clock(new Date("1991-09-21T17:10:00.000Z"), ["Date"]);
    mockProfileImage();
  });

  it("Matches screenshot", () => {
    visitAuthorizedPage("/");
    cy.wait(300);
    cy.matchScreenshot("default");
  });

  it("should load all the information", (): void => {
    visitAuthorizedPage("/");
    cy.contains("atuny0@sohu.com").should("not.exist");
    cy.contains("Welcome to Vue 3 class component!");
    cy.contains("Andrew Koidan");
    cy.contains("Users");
    cy.location("pathname").should("eq", "/");
    cy.get(".mdi-menu").click();
    cy.contains("atuny0@sohu.com");
  });

  it("should log out", (): void => {
    visitAuthorizedPage("/");
    cy.get(".mdi-menu").click();
    cy.contains("Logout").click();
    cy.contains("Sign in");
  });
});
