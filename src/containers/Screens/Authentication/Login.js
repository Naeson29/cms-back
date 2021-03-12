import {connect} from 'react-redux';

import Login      from "../../../components/Screens/Authentication/Login";
import {creators} from "../../../actions/Authentication";

// Utils
import {LOGIN} from "../../../utils/Model";

const mapStateToProps = () => {
    return {
        initialData: LOGIN
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionForm: (data) => { dispatch(creators.login.request(data)) },
        onSubmitError: (errorList) => { }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
