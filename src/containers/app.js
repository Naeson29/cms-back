import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Component
import App from '../components/app';

import { setScreenSelectors } from '../selectors';

// App function
import AppFunction from './functions/app';

const userSelector = setScreenSelectors('user');

const mapStateToProps = state => ({
    current: userSelector.GetCurrent(state),
});

const mapDispatchToProps = dispatch => ({
    ...AppFunction(dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
