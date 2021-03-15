import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Panel from '../../../components/Screens/Users/Panel';
import PanelFunction from '../../Features/PanelFunction';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
    ...PanelFunction(dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Panel));
