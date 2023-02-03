import BadBookingDetails from './BadBookingDetails.vue';

export default {
    title: 'Example/BadBookingDetails',
    component: BadBookingDetails,
    argTypes: {
    }
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BadBookingDetails },
    template: '<bad-booking-details v-bind="$props" />',
});


export const Default = Template.bind({});
Default.args = {
    day:'30',
    month:'October',
};