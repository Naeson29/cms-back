import { creators as AuthenticationCreators } from '../../Actions/Authentication';
import { creators as usersCreators } from '../../Actions/User';

export default dispatch => ({
    load: () => {
        dispatch(usersCreators.getMe.request());
    },
    logout: () => {
        dispatch(AuthenticationCreators.logout.request());
    },
});
