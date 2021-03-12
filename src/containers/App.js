import {connect}     from 'react-redux';
import {withRouter}  from 'react-router-dom';

import App from "../components/App";

// Actions
import {creators as AuthenticationCreators} from "../actions/Authentication"
import {creators as usersCreators} from "../actions/User"
import {current} from "../selectors/User";

const mapStateToProps = (state) => {
    return {
        current: current(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(usersCreators.getMe.request())
        },
        logout: () => { dispatch(AuthenticationCreators.logout.do()) },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
