import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Features/Header';

// Actions
import { creators as AuthenticationCreators } from '../../actions/Authentication';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    logout: () => { dispatch(AuthenticationCreators.logout.request()); },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
