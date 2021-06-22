import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Index from '../../../components/screens/dashboard';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
    load: () => {},
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
