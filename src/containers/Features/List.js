import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import List from '../../components/Features/List';
import PanelFunction from './PanelFunction';

// Actions
import { creators as ModalCreators } from '../../actions/Modal';
import { creators as UserCreators } from '../../actions/User';
// Selectors
import { getCurrent } from '../../selectors/User';

const mapStateToProps = state => ({
    current: getCurrent(state),
});

const mapDispatchToProps = dispatch => ({
    ...PanelFunction(dispatch),

    deleteModal: (params) => {
        dispatch(ModalCreators.open.do(params));
    },

    detail: (params) => {
        dispatch(UserCreators.read.request(params));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
