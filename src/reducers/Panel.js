import { types } from '../actions/Panel';
import { createModelReducer } from '../../react-core'

export const initialState = {
    panel: {},
};

const standardReducer = createModelReducer(initialState, types);

export const reducer = (state = initialState, action) => {

    const {payload} = action;

    switch (action.type) {

        case types.CLOSE.DO:
        case '@@router/LOCATION_CHANGE': {
            return {...initialState};
        }

        case types.OPEN.DO:{
            return {
                panel : payload
            }
        }

        default:
            return standardReducer(state, action);
    }
};

export default reducer;