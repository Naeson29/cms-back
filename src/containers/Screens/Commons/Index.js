import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Screen
import Index from '../../../components/Screens/Commons/Index';

// Utils
import getState from '../../../utils/State';
import getParam from '../../../utils/Param';
import getActionModel from '../../../utils/Action';

// Panel
import PanelFunction from '../../Features/PanelFunction';

// Modal
import ModalFunction from '../../Features/ModalFunction';

// Default
import DefaultFunction from '../../Features/DefaultFunction';

export default (model) => {
    const creators = getActionModel(model);
    const params = getParam(model);

    const mapStateToProps = state => ({
        ...getState(state, model),
    });

    const mapDispatchToProps = dispatch => ({
        ...PanelFunction(dispatch),
        ...ModalFunction(dispatch),
        ...DefaultFunction(dispatch, creators, params),
    });

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
};
