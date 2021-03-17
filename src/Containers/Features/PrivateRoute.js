import { connect } from 'react-redux';
import { getDefaultAuthenticationToken } from '../../../react-core';
import PrivateRoute from '../../Components/Features/PrivateRoute';

const mapStateToProps = state => ({
    token: getDefaultAuthenticationToken(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
