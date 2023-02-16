import errorText from "@/vue/atoms/error-text";


describe("<button />", () => {
  beforeEach(() => {
    cy.mount(errorText, {
      props: {error: "blah"},
    });
  });

  it("should select and navigate to prev month", () => {
    cy.get("button").click();
  });
});
