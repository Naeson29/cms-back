import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PanelEvent from '../../../components/Screens/Dashboard/Panel';

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PanelEvent));
