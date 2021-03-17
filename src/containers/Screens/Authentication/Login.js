import { connect } from 'react-redux';

import Login from '../../../components/Screens/Authentication/Login';
import { creators } from '../../../actions/Authentication';


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
