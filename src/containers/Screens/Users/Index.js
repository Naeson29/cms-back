import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Index  from "../../../components/Screens/Users/Index";
import {creators} from "../../../actions/User";
import {creators as ModalCreators} from "../../../actions/Modal";

import {getUsersData, getUsersLoading, getUsersPagination} from "../../../selectors/User";
import {defaultLoadParams} from "../../../utils/const";

const mapStateToProps = (state) => {
    return {
        users : getUsersData(state),
        loading : getUsersLoading(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(creators.search.request(defaultLoadParams))
        },
        deleteModal : (params) => {
            dispatch(ModalCreators.open.do(params))
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
