import router from "../../../appRoutes";
import * as types from "./types";
import * as userTypes from "../users/types";
import {
  login,
  register,
  resetPassword,
  forgotPassword,
} from "../../../auth/index";
import * as appTypes from "../../AppTypes";

const state = {
  idToken: null,
  userId: null,
  claims: null
};

const getters = {
  isAuthenticated(state) {
    return state.idToken !== null;
  },
  getClaims(state) {
    return state.claims;
  },
};

const mutations = {
  [types.AUTHUSER](state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
    state.claims = userData.claims
  },

  [types.CLEAR_AUTH](state) {
    state.idToken = null;
    state.userId = null;
    state.user = null;
    state.claims = null;
  },
};

const actions = {
  setLogoutTimer({ commit }, expirationTime) {
    setTimeout(() => {
      commit(types.CLEAR_AUTH);
    }, expirationTime * 1000);
  },
  [types.SIGNUP]({ commit, dispatch }, payload) {
    const body = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    register(body)
      .then((res) => {
        commit(types.AUTHUSER, {
          token: res.idToken,
          userId: res.localId,
        });
        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("expiresIn", expirationDate);
        dispatch(userTypes.STORE_CURRENT_USER, payload);
        dispatch("setLogoutTimer", res.data.expiresIn);
      })
      .catch((error) => console.log(error));
  },
  [types.RESET_PASSWORD]({ commit, dispatch }, payload) {
    
  },
  [types.FORGOT_PASSWORD]({ commit, dispatch }, payload) {
    
  },
  [types.LOGIN]({ commit, dispatch }, payload) {
    const body = {
      userName: payload.userName,
      password: payload.password,
    };
    return new Promise((resolve, reject) => {
      login(body)
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });

  },

  [types.LOGOUT]({ commit }) {
    commit(types.CLEAR_AUTH);
    router.replace("/auth/login");
  },
  [types.AUTO_LOGIN]({ commit, state }) {
    const token = state.token;
    if (!token) {
      return;
    }
    const expirationDate = localStorage.getItem("expirationDate");
    const now = new Date();
    if (now >= expirationDate) {
      return;
    }
    const userId = state.userId;
    const claims = state.claims;
    if (userId && token) {
      commit(types.AUTHUSER, {
        token: token,
        userId: userId,
        claims: claims
      });
    }
  },
  [types.AUTHUSER]({ commit, state }, payload) {
    commit(types.AUTHUSER, {
      token: payload.token,
      userId: payload.userId,
      claims: payload.claims,
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
