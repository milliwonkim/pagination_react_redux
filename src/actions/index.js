// src/actions/index.js

import * as Types from './actionTypes';

export const actSearchProduct = keyword => {
    return {
        type: Types.SEARCH,
        keyword
    };
};