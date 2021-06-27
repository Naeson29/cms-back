import {
    authenticationActions,
} from '../../../actions';

const { creators } = authenticationActions()

export default {
    mapState: () => ({
        initialData: {
            username: '',
            password: '',
        },
    }),
    mapDispatch: dispatch => ({
        actionForm: (data) => { dispatch(creators.login.request(data)); },
    }),
};
