import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Panel from '../../../components/Screens/Users/Panel';

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Panel));
