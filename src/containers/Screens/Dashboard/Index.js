import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Index from '../../../components/Screens/Dashboard/Index';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
    load: () => {},
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
