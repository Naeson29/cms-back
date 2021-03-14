import { types } from '../actions/Panel';
import { createModelReducer } from '../../react-core';
import { scrollBody } from '../utils/Functions';

export const initialState = {
    panel: {},
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
            panel: payload,
        };
    }

    default:
        return standardReducer(state, action);
    }
};

export default reducer;
