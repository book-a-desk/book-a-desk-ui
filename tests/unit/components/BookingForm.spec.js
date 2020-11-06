import { shallowMount } from "@vue/test-utils";

import BookingForm from "@/components/BookingForm.vue";

describe("Component BookingForm.vue", () => {
  let underTest;

  beforeEach(() => {
    underTest = shallowMount(BookingForm);
  });

  it("should render 3 text-fields", () => {
    const textFields = underTest.findAllComponents({ name: 'v-text-field' });
    expect(textFields.length).toBe(3);

    expect(textFields.at(0).attributes('label')).toBe('Office ID');
    expect(textFields.at(1).attributes('label')).toBe('Booking Date');
    expect(textFields.at(2).attributes('label')).toBe('Email Address');
  });

  it("should render a button", () => {
    const button = underTest.findComponent({ name: 'bad-contained-button' });
    expect(button.exists()).toBe(true);

    expect(button.attributes('id')).toBe('btnBook');
    expect(button.text()).toBe('Book');
  });

  describe('filling and submitting the "form"', () => {
    
  });
});
