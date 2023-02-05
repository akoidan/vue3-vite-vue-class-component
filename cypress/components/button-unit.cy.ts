import datepickerCalendar from "@/vue/atoms/datepicker-calendar.vue";


describe("<button />", () => {
  beforeEach(() => {
    cy.mount(datepickerCalendar, {
      props: {modelValue: 'blah'},
    });
  });

  it("should select and navigate to prev month", () => {
    cy.get("button").click();
  });
});
