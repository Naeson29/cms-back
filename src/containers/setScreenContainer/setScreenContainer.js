import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// models
import getModel from '../../models';
import { setScreenSelectors } from '../../selectors';

// creators
import {
    modalActions,
    panelActions,
} from '../../actions';

// Screen
import { Default } from '../../components/screens';

// state
const setState = (state, selectors) => {
    const { GetCurrent, List, Detail, Pagination, GetModal, GetPanel, LoadingDestroy, LoadingDetail, LoadingList, LoadingEdit } = selectors;
    return {
        current: GetCurrent(state),
        list: List(state),
        detail: Detail(state),
        pagination: Pagination(state),
        panel: GetPanel(state),
        modal: GetModal(state),
        loadings: {
            list: LoadingList(state),
            detail: LoadingDetail(state),
            destroy: LoadingDestroy(state),
            edit: LoadingEdit(state),
        },
    };
};

// Modal functions
const setModalFunctions = dispatch => ({
    openModal: (modal) => {
        dispatch(modalActions.creators.open.do(modal));
    },
    closeModal: () => {
        dispatch(modalActions.creators.close.do());
    },
});

// Panel functions
const setPanelFunctions = dispatch => ({
    openPanel: (panel) => {
        dispatch(panelActions.creators.open.do(panel));
    },
    closePanel: () => {
        dispatch(panelActions.creators.close.do());
    },
});

// Default functions
const setFunctions = (dispatch, creators, paramsList) => ({
    getList: () => {
        if (creators) dispatch(creators.search.request(paramsList));
    },
    getDetail: (id) => {
        if (creators) dispatch(creators.read.request(id));
    },
    getMore: (page) => {
        if (creators) {
            dispatch(creators.more.request({
                params: {
                    ...paramsList.params,
                    page,
                },
            }));
        }
    },
    update: (id, data) => {
        if (creators) dispatch(creators.update.request(id, data));
    },
    destroy: (id) => {
        if (creators) dispatch(creators.destroy.request(id));
    },
});

export default (model) => {
    const { creators, paramsList } = getModel[model];

    const mapStateToProps = state => ({
        state: {
            model,
            ...setState(state, setScreenSelectors(model)),
        },
    });

    const mapDispatchToProps = dispatch => ({
        ...setModalFunctions(dispatch),
        ...setPanelFunctions(dispatch),
        ...setFunctions(dispatch, creators, paramsList),
    });

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(Default));
};
