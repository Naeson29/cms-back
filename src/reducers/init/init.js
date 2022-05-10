import { initActions } from '../../actions';
import { createModelReducer } from '../../../react-core';

const { types } = initActions();

export const initialState = {
    data: {},
    errors: false,
    loading: true,
};

const standardReducerInit = createModelReducer(initialState, types);

export const reducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
    case types.INIT.REQUEST: {
        return {
            ...state,
        };
    }
    case types.INIT.FAILURE: {
        return {
            data: {},
            errors: action?.payload,
            loading: false,
        };
    }
    case types.INIT.SUCCESS: {
        return {
            data: payload,
            errors: false,
            loading: false,
        };
    }

    default:
        return standardReducerInit(state, action);
    }
};

export default reducer;
