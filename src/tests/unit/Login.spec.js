/* eslint-disable no-undef */
import Vuex from "vuex"
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from "vue-router"
import Login from '@/app/auth/views/Login/Login.vue'
import * as types from "../../src/app/store/modules/auth/types";
// import actions from "../../src/app/store/modules/auth/login";
// import * as mutations from "../../src/app/store/modules/auth/login";
import { i18n } from '../../src/app/shared/i18n/i18n';
// import storeConfig from "../../src/app/store/AppStore";

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(i18n)

// const store = new Vuex.Store(storeConfig)

const store = new Vuex.Store({
    state: {
        loading: false,
        data: null,
        error: null,
    },

    getters: {
        authToken: state => state,
    },

})


describe('Login.vue Test', () => {
    const wrapper = shallowMount(Login, {
        store,
        localVue,
        mocks: {
            $t: (msg) => msg
        }

    })
    it('CHeck the name of the component', () => {
        expect(wrapper.name()).toBe('app-login')
    })
})

describe("authenticate", () => {
    let actions;
    const actionName = types.USERS_DATA_REQUEST
    let mutations
    beforeEach(() => {

        mutations = {
            [types.USERS_DATA_REQUEST]: jest.fn()
        }
        actions = {
            [actionName]: jest.fn()
        };
    })

    it("authenticated a user", async () => {
        const commit = jest.fn()


        mutations[types.USERS_DATA_REQUEST](store.state)

        await actions[actionName]({ commit }, {})
        await store.commit(actionName)
        expect(store.state.data).toBe(null)
    })
})
