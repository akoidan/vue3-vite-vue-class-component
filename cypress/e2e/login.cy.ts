import {
  mockGetUser,
  mockLoginResponse,
  mockProfileImage,
  visitAuthorizedPage,
  visitUnathorizedPage,
} from "./utils/mocks";

describe("Login page", (): void => {
  beforeEach(() => {
  });

  it("Matches screenshot", () => {
    visitUnathorizedPage("/sign-in");
    cy.wait(300);
    cy.matchScreenshot("default");
  });

  it("Logs in", () => {
    visitUnathorizedPage("/");
    mockLoginResponse();
    mockProfileImage();
    mockGetUser();
    cy.location("pathname").should("eq", "/sign-in");
    cy.contains("Sign in").click()
    cy.wait("@postLogin", {timeout: 1000});
    cy.get("@postLogin")
      .its("request.body")
      .should("deep.equal", {
        "password": "0lelplR",
        "username": "kminchelle"
      });
    cy.contains('Welcome to Vue 3 class component!');
  });
});
