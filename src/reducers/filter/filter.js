import { filterActions } from '../../actions';
import { createModelReducer } from '../../../react-core';

const { types } = filterActions();

export const initialState = {
    filter: {
        open: false,
    },
};

const standardReducerPanel = createModelReducer(initialState, types);

export const reducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
    case types.CLOSE.DO:
    case '@@router/LOCATION_CHANGE': {
        return { ...initialState };
    }

    case types.OPEN.DO: {
        return {
            filter: payload,
        };
    }

    default:
        return standardReducerPanel(state, action);
    }
};

export default reducer;
