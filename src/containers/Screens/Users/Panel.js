import { connect }   from 'react-redux';
import {withRouter}  from 'react-router-dom';
import Panel from '../../../components/Screens/Users/Panel';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = () => {

    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Panel));