import {
  mockGetUsers,
  mockProfileImage,
  mockUserImage2,
  visitAuthorizedPage,
} from "./utils/mocks";

describe("Users page", (): void => {
  beforeEach(() => {
    mockUserImage2();
    mockProfileImage();
    mockGetUsers();
    visitAuthorizedPage("/users");
  });

  it("Matches screenshot", () => {
    cy.wait(300);
    cy.matchScreenshot("default");
  });

  it.only("Displays all data", () => {
    cy.contains("atuny0@sohu.com");
    cy.contains("ggude7 : MWwlaeWcOoF6");
    cy.contains("Mavis Schultz");
    cy.contains("Terrill Hills");
    cy.get(".v-pagination__list").contains("10");
  });
});
