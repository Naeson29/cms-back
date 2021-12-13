import { defaultActions } from '../../actions';
import { createModelReducer } from '../../../react-core';

const { types } = defaultActions('publication');

export const initialState = {
    data: {},
    views: {},
    current: {},
};
const standardReducer = createModelReducer(initialState, types);

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    default:
        return standardReducer(state, action);
    }
};

export default reducer;
