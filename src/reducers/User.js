import { types } from '../actions/User';
import { createModelReducer } from '../../react-core';

export const initialState = {
    data: {},
    views: {},
    current: {},
};
const standardReducer = createModelReducer(initialState, types);

export const reducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
    case types.GET_ME.REQUEST: {
        return {
            ...state,
            current: {},
        };
    }

    case types.GET_ME.SUCCESS: {
        return {
            ...state,
            current: payload.data,
        };
    }

    case types.GET_ME.FAILURE: {
        return {
            ...state,
            current: {},
        };
    }

    default:
        return standardReducer(state, action);
    }
};

export default reducer;
