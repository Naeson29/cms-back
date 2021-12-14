import { defaultActions } from '../../actions';
import { createModelReducer } from '../../../react-core';

export default (name) => {
    const { types } = defaultActions(name);

    const initialState = {
        data: {},
        views: {},
        current: {},
    };

    const standardReducer = createModelReducer(initialState, types);

    const reducer = (state = initialState, action) => {
        switch (action.type) {
        default:
            return standardReducer(state, action);
        }
    };

    return reducer;
};
