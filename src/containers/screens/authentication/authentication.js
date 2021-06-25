import {
    authenticationActions,
} from '../../../actions';

export default {
    mapState: () => ({
        initialData: {
            username: '',
            password: '',
        },
    }),
    mapDispatch: dispatch => ({
        actionForm: (data) => { dispatch(authenticationActions.creators.login.request(data)); },
    }),
};
