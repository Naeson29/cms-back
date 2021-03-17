import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Component
import App from '../Components/App';

// Selectors
import { getCurrent } from '../Selectors/User';

// App function
import AppFunction from './Functions/AppFunction';

const mapStateToProps = state => ({
    current: getCurrent(state),
});

const mapDispatchToProps = dispatch => ({
    ...AppFunction(dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
