import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth/auth";
import users from "./modules/users/users";
import global from "./modules/global/global";
import actions from "./AppActions";
import getters from "./AppGetters";
import mutations from "./AppMutations";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ encodingType: 'aes', isCompression: true, encryptionSecret: 'my-secret-key' });

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0,
    theme: '',
    snack: {},
    loader: {}
  },
  getters,
  mutations,
  actions,
  modules: {
    auth,
    users,
    global
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
