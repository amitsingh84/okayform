// export const value = state => {
//     return state.value
// }

import * as types from './AppTypes';

export default {
    [types.VALUE]: state => {
        return state.value;
    },
    [types.THEME]: state => {
        return state.theme;
    },
    [types.GET_SNACK_BAR]: state => {
        return state.snack;
    },
    [types.GET_LOADER]: state => {
        return state.loader;
    }
};