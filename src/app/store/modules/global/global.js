import * as types from './types';

/** Initial state */
const initialState = {
  loading: false,
  countriesError: null,
  paymentTypesError: null,
  shippingMethodsError: null,
  countries: null,
  paymentTypes: null,
  shippingMethods: null
};



const {
  GET_COUNTRIES_DATA_SUCCESS,
  GET_COUNTRIES_DATA_REQUEST,
  GET_COUNTRIES_DATA_ERROR,

  GET_PAYMENTTYPE_DATA_SUCCESS,
  GET_PAYMENTTYPE_DATA_REQUEST,
  GET_PAYMENTTYPE_DATA_ERROR,

  GET_SHIPPINGMETHODS_DATA_SUCCESS,
  GET_SHIPPINGMETHODS_DATA_REQUEST,
  GET_SHIPPINGMETHODS_DATA_ERROR,

  GET_ROLES_DATA_REQUEST

} = types;

/**
 * Users data mutations
 */
const mutations = {
  [GET_COUNTRIES_DATA_REQUEST](state) {
    Object.assign(state, { loading: true, countriesError: null, countries: null });
  },

  [GET_COUNTRIES_DATA_SUCCESS](state, payload) {
    Object.assign(state, { loading: false, countries: payload });
  },

  [GET_COUNTRIES_DATA_ERROR](state, payload) {
    Object.assign(state, {
      loading: false,
      countriesError: payload || true,
      countries: null
    });
  },

  [GET_PAYMENTTYPE_DATA_REQUEST](state) {
    Object.assign(state, { loading: true, paymentTypesError: null, paymentTypes: null });
  },

  [GET_PAYMENTTYPE_DATA_SUCCESS](state, payload) {
    Object.assign(state, { loading: false, paymentTypes: payload });
  },

  [GET_PAYMENTTYPE_DATA_ERROR](state, payload) {
    Object.assign(state, {
      loading: false,
      paymentTypesError: payload || true,
      paymentTypes: null
    });
  },

  [GET_SHIPPINGMETHODS_DATA_REQUEST](state) {
    Object.assign(state, { loading: true, shippingMethodsError: null, shippingMethods: null });
  },

  /** user data success */
  [GET_SHIPPINGMETHODS_DATA_SUCCESS](state, payload) {
    Object.assign(state, { loading: false, shippingMethods: payload });
  },

  /** user data error */
  [GET_SHIPPINGMETHODS_DATA_ERROR](state, payload) {
    Object.assign(state, {
      loading: false,
      shippingMethodsError: payload || true,
      shippingMethods: null
    });
  },
};



/**
 * Users data actions
 */
const actions = {
  /** fetch user data */
  async [types.GET_COUNTRIES_DATA_REQUEST]({ commit }) {
    
  },

  async [types.GET_PAYMENTTYPE_DATA_REQUEST]({ commit }) {
    
  },

  async [types.GET_ROLES_DATA_REQUEST]({ commit }) {
    
  },

  async [types.GET_SHIPPINGMETHODS_DATA_REQUEST]({ commit }) {
    // return new Promise((resolve, reject) => {
    //   GetShippingMethods().then(data => {
    //     resolve(data);
    //   })
    //     .catch(e => {
    //       reject(e);
    //     });
    // })
  },
};

const getters = {
  getCountries(state) {
    return state.countries
  },
  getShippingMethods(state) {
    return state.shippingMethods
  },
  getPaymentTypes(state) {
    return state.paymentTypes
  },
  getGlobalLoader(state) {
    return state.loading
  }
};

export default {
  state: initialState,
  getters,
  mutations,
  actions,
};
