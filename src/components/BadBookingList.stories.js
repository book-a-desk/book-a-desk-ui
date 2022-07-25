import BadBookingList from './BadBookingList.vue';

export default {
    title: 'Example/BadBookingList',
    component: BadBookingList,
    parameters: {
        default: 'lightcyan',
        values: [
            { name: 'lightcyan', value: '#e0ffff' },
        ],
    },
    argTypes: {
    }
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BadBookingList },
    template: '<bad-booking-list v-bind="$props" />',
});


export const Default = Template.bind({});
Default.args = {

};