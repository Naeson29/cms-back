import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Index from '../../../components/Screens/Users/Index';
import { creators } from '../../../actions/User';

import {userState} from "../../../utils/State";
import { paramUser } from '../../../utils/Param';

const mapStateToProps = state => ({
    ...userState(state)
});

const mapDispatchToProps = dispatch => ({
    load: () => {
        dispatch(creators.search.request(paramUser));
    },
    more: (page) => {
        dispatch(creators.more.request({
            params: {
                ...paramUser.params,
                page,
            },
        }));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
