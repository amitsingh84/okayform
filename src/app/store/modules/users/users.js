import * as types from './types';
import * as appTypes from '../../AppTypes';
import * as authTypes from '../auth/types';
import axios from "axios";

/** Initial state */
const initialState = {
  loading: false,
  data: null,
  error: null,
  currentUser: null,
  users: null
};


const {
  USERS_DATA_ERROR,
  USERS_DATA_REQUEST,
  USERS_DATA_RESET,
  USERS_DATA_SUCCESS,
  UPDATE_USERS_DETAILS_REQUEST,
  UPDATE_USERS_DETAILS_SUCCESS,
  UPDATE_USERS_DETAILS_ERROR,
  UPDATE_USERS_COMPANY_REQUEST,
  UPDATE_USERS_COMPANY_SUCCESS,
  UPDATE_USERS_COMPANY_ERROR,

  RESET_USERS_PASSWORD_SUCCESS,
  RESET_USERS_PASSWORD_ERROR,
} = types;

/**
 * Users data mutations
 */
const mutations = {
  /** user data request */
  [USERS_DATA_REQUEST](state) {
    Object.assign(state, { loading: true, error: null, users: null });
  },

  /** user data success */
  [USERS_DATA_SUCCESS](state, payload) {
    Object.assign(state, { loading: false, data: payload });
  },

  /** user data error */
  [USERS_DATA_ERROR](state, payload) {
    Object.assign(state, {
      loading: false,
      data: null,
      error: payload || true,
      users: null
    });
  },

  /** reset user data */
  [USERS_DATA_RESET](state) {
    Object.assign(state, { loading: true, data: null, error: null, users: null });
  },

  [types.STORE_USERS](state, userData) {
    state.users = userData
  },
  [types.STORE_CURRENT_USER](state, userData) {
    state.currentUser = userData
  },
};



/**
 * Users data actions
 */
const actions = {

  async [types.UPDATE_USERS_COMPANY_REQUEST]({ commit }, that) {

  },



  async [types.UPDATE_USERS_DETAILS_REQUEST]({ commit }, that) {

  },

  async [types.RESET_USERS_PASSWORD_REQUEST]({ commit }, that) {

  },

  async [types.REQUEST_USERS_PASSWORD_FOR_LOGGED_IN_USER]({ commit }, that) {

  },


  async [types.GET_USERS_DETAILS_REQUEST]({ commit }, request) {

  },

  /** fetch user data */
  async [types.USERS_DATA_REQUEST]({ commit }, authCred) {

  },
  [types.STORE_CURRENT_USER]({ rootState }, payload) {

  },
  [types.FETCH_CURRENT_USER]({ commit, dispatch, rootState }) {

  },
  [types.FETCH_ALL_USER]({ commit, dispatch }) {

  },
};

const getters = {
  userListData: state => state,

  currentUser(state) {
    return state.currentUser
  },
  allUsers(state) {
    return state
  },
};

export default {
  state: initialState,
  getters,
  mutations,
  actions,
};
