import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Index from '../../../components/Screens/Dashboard/Index';
import PanelFunction from '../../Features/PanelFunction';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
    load: () => {},
    ...PanelFunction(dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
