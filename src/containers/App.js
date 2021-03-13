import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from '../components/App';

// Actions
import { creators as usersCreators } from '../actions/User';
import { getCurrent } from '../selectors/User';

const mapStateToProps = state => ({
    current: getCurrent(state),
});

const mapDispatchToProps = dispatch => ({
    load: () => {
        dispatch(usersCreators.getMe.request());
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
