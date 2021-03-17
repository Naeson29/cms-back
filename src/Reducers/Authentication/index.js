import { types } from '../../Actions/Authentication';

export const initialState = {
    token: null,
    errors: {},
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case types.LOGIN.SUCCESS:
        return {
            ...state,
            token: action?.payload?.access_token,
            errors: {},
        };

    case types.LOGIN.FAILURE:
        return {
            ...state,
            errors: action?.payload,
            token: null,
        };

    case types.LOGOUT.SUCCESS:
    case types.LOGOUT.FAILURE:
        return {
            ...state,
            token: null,
        };

    default:
        return state;
    }
};

export default reducer;
