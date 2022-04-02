import * as types from './AppTypes';


export default {
    [types.MUTATE_UPDATE_VALUE]: (state, payload) => {
        state.value = payload;
    },
    // [types.MUTATE_SET_THEME]: (state, payload) => {
    //     if (payload === 'light') {
    //         state.theme = Light;
    //     } else {
    //         state.theme = Dark;
    //     }
    // },
    [types.MUTATE_SET_SNACK_BAR]: (state, payload) => {
        state.snack = payload;
    },
    [types.MUTATE_SET_LOADER]: (state, payload) => {
        state.loader = payload;
    },
};