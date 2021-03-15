import { connect } from 'react-redux';
import Panel from '../../components/Features/Panel';
import { getPanel } from '../../selectors/Panel';
import PanelFunction from './PanelFunction';

const mapStateToProps = state => ({
    panel: getPanel(state),
});

const mapDispatchToProps = dispatch => ({
    ...PanelFunction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
