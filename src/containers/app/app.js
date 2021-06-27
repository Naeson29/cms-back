import {
    authenticationActions,
    userActions,
} from '../../actions';

export default {
    mapDispatch: dispatch => ({
        load: () => {
            dispatch(userActions().creators.getMe.request());
        },
        logout: () => {
            dispatch(authenticationActions().creators.logout.request());
        },
    }),
};
