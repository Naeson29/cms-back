import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Index from '../../../components/Screens/Dashboard/Index';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = () => {

    return {
        load: (parameters) => {
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));