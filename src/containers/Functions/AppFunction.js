import { creators as AuthenticationCreators } from '../../actions/Authentication';
import { creators as usersCreators } from '../../actions/User';

export default dispatch => ({
    load: () => {
        dispatch(usersCreators.getMe.request());
    },
    logout: () => {
        dispatch(AuthenticationCreators.logout.request());
    },
});
