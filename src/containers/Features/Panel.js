import { connect } from 'react-redux';
import Panel from '../../components/Features/Panel';
import {panel} from "../../selectors/Panel";

const mapStateToProps = (state) => {
    return {
        panel: panel(state),
    };
};

const mapDispatchToProps = () => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);