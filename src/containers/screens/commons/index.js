import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Screen
import Index from '../../../components/screens/commons';

// models
import getModel from '../../models';

// Utils
import getState from '../../utilities/state';

// Default function
import DefaultFunction from '../../functions/default';

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
