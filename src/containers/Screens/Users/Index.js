import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Index  from "../../../components/Screens/Users/Index";
import {creators} from "../../../actions/User";
import {creators as ModalCreators} from "../../../actions/Modal";

import {current, list, loadingDestroy, loadingList, paginationList} from "../../../selectors/User";
import {paramUser} from "../../../utils/Param";

const mapStateToProps = (state, { match: { params: { id }}}) => {
    return {
        users : list(state),
        loading : loadingList(state) || loadingDestroy(id)(state),
        current : current(state),
        pagination : paginationList(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(creators.search.request(paramUser))
        },
        more: (page) => {
            console.log('ici')
            dispatch(creators.more.request({
                ...paramUser,
                page : page
            }))
        },
        deleteModal : (params) => {
            dispatch(ModalCreators.open.do(params))
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
