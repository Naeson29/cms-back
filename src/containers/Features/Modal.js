import { connect } from 'react-redux';
import Modal from '../../components/Features/Modal';
import {
    getOpen, getParams, getType,
} from '../../selectors/Modal';
import { creators } from '../../actions/Modal';
import { creators as UserCreators } from '../../actions/User';

const mapStateToProps = state => ({
    open: getOpen(state),
    type: getType(state),
    params: getParams(state),
});

const mapDispatchToProps = dispatch => ({
    close: () => {
        dispatch(creators.close.do());
    },
    destroy: (params) => {
        const creator = () => {
            switch (params.action) {
            case 'User': {
                return UserCreators;
            }
            default:
                return undefined;
            }
        };

        if (creator) dispatch(creator().destroy.request(params.id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
