import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import List from '../../components/Features/List';

// Actions
import { creators as ModalCreators } from '../../actions/Modal';
// Selectors
import { getCurrent } from '../../selectors/User';

const mapStateToProps = state => ({
    current: getCurrent(state),
});

const mapDispatchToProps = dispatch => ({
    deleteModal: (params) => {
        dispatch(ModalCreators.open.do(params));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
