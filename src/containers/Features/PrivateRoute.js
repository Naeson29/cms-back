import {connect} from 'react-redux';
import {getDefaultAuthenticationToken} from "../../../react-core";
import PrivateRoute from "../../components/Features/PrivateRoute";


const mapStateToProps = (state) => {
    return {
        token : getDefaultAuthenticationToken(state)
    };
};

const mapDispatchToProps = () => {
    return {
        //
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);