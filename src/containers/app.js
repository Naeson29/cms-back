import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Component
import App from '../components/app';

// selectors
import User from '../selectors/user';

// App function
import AppFunction from './functions/app';

const mapStateToProps = state => ({
    current: User.GetCurrent(state),
});

const mapDispatchToProps = dispatch => ({
    ...AppFunction(dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
