import { types } from '../actions/Modal';
import { createModelReducer } from '../../react-core';

export const initialState = {
    open: false,
    type: null,
    params: {},
};

const standardReducer = createModelReducer(initialState, types);

export const reducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
    case types.CLOSE.DO:
    case '@@router/LOCATION_CHANGE': {
        return { ...initialState };
    }

    case types.OPEN.DO: {
        return {
            open: true,
            type: payload.type,
            params: payload.params,
        };
    }

    default:
        return standardReducer(state, action);
    }
};

export default reducer;
