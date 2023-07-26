import Vue from "vue";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import BadUserListItem from "@/components/BadUserListItem.vue";

Vue.component("BadUserListItem", BadUserListItem)

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BadUserListItem.vue", () => {
    let wrapper;
    const booking = 
    { 
        office: { 
            id: "1"
        },
        date: "2020-12-31",
        user: {
            email: "lasnikr@me.com"
        }
    }
    beforeEach(() => {
        wrapper = shallowMount(BadUserListItem, {
            propsData: {
                booking: booking
            }
        });
    })
    
    it("should render an username when a booking is not empty", () => {
        const container = wrapper.find("#username")
        expect(container.exists()).toBe(true)
    })

    it("should show the correct username for the email of an user", () => {
        const container = wrapper.find("#username")
        expect(container.text()).toEqual("lasnikr")
    })

    it("should render an avatar when a booking is not empty", () => {
        const container = wrapper.findComponent({ name: "v-avatar" })
        expect(container.exists()).toBe(true)
    })
});