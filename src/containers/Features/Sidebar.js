import { connect }  from 'react-redux';
import {withRouter} from 'react-router-dom';
import Sidebar from '../../components/Features/Sidebar';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {

    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));