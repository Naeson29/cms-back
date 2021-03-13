import { connect } from 'react-redux';
import Panel from '../../components/Features/Panel';
import { panel } from '../../selectors/Panel';

const mapStateToProps = state => ({
    panel: panel(state),
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
