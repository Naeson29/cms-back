import { connect }   from 'react-redux';
import {withRouter}  from 'react-router-dom';
import PanelEvent    from '../../../components/Screens/Dashboard/Panel';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = () => {

    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PanelEvent));