import { connect } from 'react-redux';

import Login from '../../../components/screens/authentication';
import { creators } from '../../../actions/authentication';

const mapStateToProps = () => ({
    initialData: {
        username: '',
        password: '',
    },
});

const mapDispatchToProps = dispatch => ({
    actionForm: (data) => { dispatch(creators.login.request(data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
