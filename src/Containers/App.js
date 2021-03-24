import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Component
import App from '../Components/App';

// Selectors
import User from '../Selectors/User';

// App function
import AppFunction from './Functions/App';

const mapStateToProps = state => ({
    current: User.getCurrent(state),
});

const mapDispatchToProps = dispatch => ({
    ...AppFunction(dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
