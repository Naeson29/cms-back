import {
    authenticationActions,
    userActions,
} from '../../actions';

// selectors
import {
    setAppSelector,
} from '../../selectors';

/**
 *
 * @param state
 * @param selector
 * @returns {{modal}}
 */
const setAppState = (state, selector) => {
    const { GetData, GetLoading, GetErrors } = selector;
    return {
        appData: GetData(state),
        appError: GetErrors(state),
        appLoading: GetLoading(state),
        appLoaded: !GetLoading(state) && !GetErrors(state),
    };
};

export default {
    mapState: state => ({
        ...setAppState(state, setAppSelector),
    }),
    mapDispatch: dispatch => ({
        load: () => {
            dispatch(userActions().creators.getMe.request());
        },
        logout: () => {
            dispatch(authenticationActions().creators.logout.request());
        },
    }),
};
