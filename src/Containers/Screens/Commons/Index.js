import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Screen
import Index from '../../../Components/Screens/Commons/Index';

// Utils
import getState from '../../Utilities/State';
import getParamList from '../../Utilities/Param';
import getActionModel from '../../Utilities/Action';

// Panel function
import PanelFunction from '../../Functions/Panel';

// Modal function
import ModalFunction from '../../Functions/Modal';

// Default function
import DefaultFunction from '../../Functions/Default';

export default (model) => {
    const creators = getActionModel(model);
    const paramsList = getParamList(model);

    const mapStateToProps = state => ({
        ...getState(state, model),
    });

    const mapDispatchToProps = dispatch => ({
        ...PanelFunction(dispatch),
        ...ModalFunction(dispatch),
        ...DefaultFunction(dispatch, creators, paramsList),
    });

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
};
