import loginResponse from "../../fixtures/post-login.response.json";

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

export function mockUserImage2(): void {
  cy.intercept(
   `${Cypress.env("BACKEND_ADDRESS")}/doloremquesintcorrupti.png`,
    {fixture: "doloremquesintcorrupti.png"},
  ).as("getUserImage2");
}

export function mockGetUsers(): void {
  cy.intercept(
   `${Cypress.env("BACKEND_ADDRESS")}/auth/users*`,
    {fixture: "get-users.response.json"},
  ).as("getUserImage2");
}

export function mockLoginResponse(): void {
  cy.intercept(
   `${Cypress.env("BACKEND_ADDRESS")}/auth/login`,
    {fixture: "post-login.response.json"},
  ).as("postLogin");
}

export function visitAuthorizedWOProfile(url: string): void {
  cy.visit(url, {
    onBeforeLoad(window) {
      window.localStorage.setItem("sessionToken", loginResponse.sessionToken);
    },
  });
}

export function visitUnathorizedPage(url: string): void {
  cy.visit(url);
}

export function visitAuthorizedPage(url: string): void {
  mockGetUser();
  visitAuthorizedWOProfile(url);
}
