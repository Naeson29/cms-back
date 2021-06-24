import { connect } from 'react-redux';

import Login from '../../../components/screens/authentication';
import { authenticationActions } from '../../../actions';

const mapStateToProps = () => ({
    initialData: {
        username: '',
        password: '',
    },
});

const mapDispatchToProps = dispatch => ({
    actionForm: (data) => { dispatch(authenticationActions.creators.login.request(data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
