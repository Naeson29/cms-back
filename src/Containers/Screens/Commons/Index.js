import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Screen
import Index from '../../../Components/Screens/Commons/Index';

// Utils
import getState from '../../Utilities/State';
import getParamList from '../../Utilities/Param';
import getActionModel from '../../Utilities/Action';

// Panel function
import PanelFunction from '../../Functions/PanelFunction';

// Modal function
import ModalFunction from '../../Functions/ModalFunction';

// Default function
import DefaultFunction from '../../Functions/DefaultFunction';

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
