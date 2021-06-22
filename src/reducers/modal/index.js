import { types } from '../../actions/modal';
import { createModelReducer } from '../../../react-core';
import { scrollBody } from '../../utilities/functions';

export const initialState = {
    modal: {},
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
            modal: payload,
        };
    }

    default:
        return standardReducer(state, action);
    }
};

export default reducer;
