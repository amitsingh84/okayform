/* eslint-disable no-undef */
import Vuex from "vuex"
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from "vue-router"
import Header from '@/app/shared/components/AppHeader/AppHeader.vue'
// import UserList from '@/app/main/users/views/UserList/UserList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

// const store = new Vuex.Store({
//   state: {
//     idToken: null,
//     userId: null,
//     user: null
//   },

//   getters: {
//     isAuthenticated(state) {
//         return state.idToken !== null
//     },
//   }
// })


describe('AppHeader Test', () => {
  const wrapper = shallowMount(Header, {
    localVue,
  })
  it('CHeck the name of the component', () => {
    expect(wrapper.name()).toBe('AppHeader')
  })

  // it('check the header text of the component', () => {
  //   expect(wrapper.find('#header').text()).toBe('App Header')
  // })
})
