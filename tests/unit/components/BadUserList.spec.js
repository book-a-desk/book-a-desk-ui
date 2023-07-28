import Vue from "vue";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import BadUserList from "@/components/BadUserList.vue";
import BadUserListItem from "@/components/BadUserListItem.vue";

Vue.component("BadUserList", BadUserList)
Vue.component("BadUserListItem", BadUserListItem)

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Component BadUserList.vue", () => {
    let wrapper
    const date = "2022-05-03"
    const bookings = [
    { 
        office: { 
            id: "1"
        },
        date: date,
        user: {
            email: "user@me.com"
        }
    },
    { 
        office: { 
            id: "1"
        },
        date: date,
        user: {
            email: "lasnikr@me.com"
        }
    }
    ]

    let mockStore;
    mockStore = { dispatch: jest.fn() }
    
    beforeEach(() => {
        wrapper = shallowMount(BadUserList, {
            propsData: {
                date: date,
            }, 
            mocks: {
                $store: mockStore
            }
        });
    })

    it ("should show the correct date in the heading", () => {
        const card = wrapper.findComponent({ name: "v-card" });
        expect(card.text()).toContain(date)
    })
    
    it ("should render a user list when bookings are present", () => {
        const users = wrapper.findAllComponents(BadUserListItem)
        expect(users.length).toBe(2)
    })
});