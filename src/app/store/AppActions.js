import * as types from './AppTypes';

export default {
    [types.UPDATE_VALUE]: ({ commit }, payload) => {
        commit(types.MUTATE_UPDATE_VALUE, payload)
    },
    [types.SET_THEME]: ({ commit }, payload) => {
        commit(types.MUTATE_SET_THEME, payload)
    },
    [types.SET_SNACK_BAR]: ({ commit }, payload) => {
        commit(types.MUTATE_SET_SNACK_BAR, payload)
    },
    [types.SET_LOADER]: ({ commit }, payload) => {
        commit(types.MUTATE_SET_LOADER, payload)
    },
};