import {
    authenticationActions,
    userActions,
} from '../../actions';

// selectors
import {
    setInitSelector,
} from '../../selectors';

/**
 *
 * @param state
 * @param selector
 * @returns {{modal}}
 */
const setInitState = (state, selector) => {
    const { GetData, GetLoading, GetErrors } = selector;
    return {
        initData: GetData(state),
        initError: GetErrors(state),
        initLoading: GetLoading(state),
        loaded: !GetLoading(state) && !GetErrors(state),
    };
};

export default {
    mapState: state => ({
        ...setInitState(state, setInitSelector),
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
