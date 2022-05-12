import { panelActions } from '../../actions';
import { createModelReducer } from '../../../react-core';

const { types } = panelActions();

export const initialState = {
    panel: {
        open: false,
        content: null,
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
            panel: payload,
        };
    }

    default:
        return standardReducerPanel(state, action);
    }
};

export default reducer;
