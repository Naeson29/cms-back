import { connect } from 'react-redux';
import Panel from '../../components/Features/Panel';
import { getPanel } from '../../selectors/Panel';

const mapStateToProps = state => ({
    panel: getPanel(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
