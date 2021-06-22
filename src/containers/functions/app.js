import { creators as AuthenticationCreators } from '../../actions/authentication';
import { creators as usersCreators } from '../../actions/user';

export default dispatch => ({
    load: () => {
        dispatch(usersCreators.getMe.request());
    },
    logout: () => {
        dispatch(AuthenticationCreators.logout.request());
    },
});
