import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Screen
import Index from '../../../Components/Screens/Commons/Index';

// Models
import getModel from '../../Models';

// Utils
import getState from '../../Utilities/State';

// Default function
import DefaultFunction from '../../Functions/Default';

export default (model) => {
    const { creators, paramsList, selectors } = getModel(model);

    const mapStateToProps = state => ({
        state: {
            model,
            ...getState(state, selectors),
        },
    });

    const mapDispatchToProps = dispatch => ({
        ...DefaultFunction(dispatch, creators, paramsList),
    });

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
};
