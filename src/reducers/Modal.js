import { types } from '../actions/Modal';
import { createModelReducer } from '../../react-core';
import { scrollBody } from '../utils/Functions';

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
        scrollBody(false);
        return { ...initialState };
    }

    case types.OPEN.DO: {
        scrollBody(true);
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
