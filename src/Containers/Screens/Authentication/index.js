import { connect } from 'react-redux';

import Login from '../../../Components/Screens/Authentication';
import { creators } from '../../../Actions/Authentication';


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
