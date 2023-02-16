import loginResponse from "../../fixtures/post-login.response.json";

export function visitAuthorizedPage(url: string): void {
  mockGetUser();
  visitAuthorizedWOProfile(url);
}

export function mockGetUser(): void {
  cy.intercept(
    {
      method: "GET",
      url: `${Cypress.env("BACKEND_ADDRESS")}/auth/user/1`,
    },
    {fixture: "get-user-1.response.json"},
  ).as("getUser");
}

export function mockProfileImage(): void {
  cy.intercept(
   `${Cypress.env("BACKEND_ADDRESS")}/hicveldicta.png`,
    {fixture: "hicveldicta.png"},
  ).as("getProfileImage");
}

export function visitAuthorizedWOProfile(url: string): void {
  cy.visit(url, {
    onBeforeLoad(window) {
      window.localStorage.setItem("sessionToken", loginResponse.sessionToken);
    },
  });
}

export function visitUnathorizedPage(url: string) {
  cy.visit(url);
}
