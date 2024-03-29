import { shallowMount, createLocalVue } from "@vue/test-utils";
import BadTextInput from "@/components/BadTextInput.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BadTextInput.vue", () => {
  let domainName;
  let underTest;

  beforeEach(() => {
    domainName = process.env.VUE_APP_DOMAIN_NAME;
    underTest = shallowMount(BadTextInput, {
      propsData: {
        label: "I am input",
        placeholder: "Type something",
        id: "Input1",
        value: "Initial value"
      }
    });
  });

  it("should render v-text-field", () => {
    const textField = underTest.findComponent({ name: "v-text-field" });
    expect(textField.exists()).toBe(true);
  });

  it("should pass [value] prop", () => {
    const textField = underTest.findComponent({ name: "v-text-field" });
    expect(textField.props().value).toEqual("Initial value");
  });

  it("should pass [label] prop", () => {
    const textField = underTest.findComponent({ name: "v-text-field" });
    expect(textField.props().label).toEqual("I am input");
  });

  it("should pass [id] prop", () => {
    const textField = underTest.findComponent({ name: "v-text-field" });
    expect(textField.props().id).toEqual("Input1");
  });

  it("should pass [placeholder] prop", () => {
    const textField = underTest.findComponent({ name: "v-text-field" });
    expect(textField.props().placeholder).toEqual("Type something");
  });

  it("validation should be successful with a correct corporate email", () => {
    let validEmail = `valid@${domainName}`
    
    let isRequired = underTest.vm.rules.isNotEmpty(validEmail);
    let hasWhitespaces = underTest.vm.rules.hasWhitespaces(validEmail);
    let hasEmailFormat = underTest.vm.rules.hasEmailFormat(validEmail);
    let isCorporateEmail = underTest.vm.rules.isCorporateDomain(validEmail);
    
    expect(isRequired).toBe(true)
    expect(hasWhitespaces).toBe(true)
    expect(hasEmailFormat).toBe(true)
    expect(isCorporateEmail).toBe(true)
  });

  it("validation should fail when email is empty", () => {
    let invalidRule = underTest.vm.rules.isNotEmpty('');
    expect(invalidRule).toBe("Email cannot be empty")
  });

  it("validation should fail when email has a whitespace", () => {
    let invalidRule = underTest.vm.rules.hasWhitespaces('test @ domain.com');
    expect(invalidRule).toBe("Email cannot contain spaces")
  });

  it("validation should fail when the email's domain is not corporate", () => {
    let invalidRule = underTest.vm.rules.isCorporateDomain('test@domain.com');
    expect(invalidRule).toBe(`Email should end with @${domainName}`);
  });

  it("validation should fail when the email does not have the correct format", () => {
    let invalidRule = underTest.vm.rules.hasEmailFormat('test@domain');
    expect(invalidRule).toBe(`Email must be in format: user@${domainName}`);
  });
});