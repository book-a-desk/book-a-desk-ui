import BadContainedButton from './BadContainedButton.vue';

export default {
  title: 'Example/BadContainedButton',
  component: BadContainedButton,
  argTypes: {
    disabled: { control: "boolean"},
    block: {  control: "boolean"}
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BadContainedButton },
  template: '<bad-contained-button @onClick="onClick" v-bind="$props" />',
});


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label:'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label:'Button',
  disabled: true,
};

export const Block = Template.bind({});
Block.args = {
  label:'Button',
  block: true,
};
