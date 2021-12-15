import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// models
import models from '../../models';

// selectors
import {
    setScreenSelector,
    setModalSelector,
    setPanelSelector,
} from '../../selectors';

// creators
import {
    modalActions,
    panelActions,
} from '../../actions';

// Screen
import { Default } from '../../components/screens';

/**
 *
 * @param state
 * @param selector
 * @returns {{modal}}
 */
const setModalState = (state, selector) => {
    const { GetModal } = selector;
    return {
        modal: GetModal(state),
    };
};

/**
 *
 * @param state
 * @param selector
 * @returns {{panel}}
 */
const setPanelState = (state, selector) => {
    const { GetPanel } = selector;
    return {
        panel: GetPanel(state),
    };
};

/**
 *
 * @param state
 * @param selectors
 * @returns {{current, pagination, detail, list, loadings: {edit, destroy, detail, list}}}
 */
const setScreenState = (state, selectors) => {
    const { List, Detail, Pagination, LoadingDestroy, LoadingDetail, LoadingList, LoadingEdit } = selectors;
    return {
        list: List(state),
        detail: Detail(state),
        pagination: Pagination(state),
        loadings: {
            list: LoadingList(state),
            detail: LoadingDetail(state),
            destroy: LoadingDestroy(state),
            edit: LoadingEdit(state),
        },
    };
};

/**
 *
 * @param dispatch
 * @returns {{openModal: List.propTypes.openModal, closeModal: Modals.propTypes.closeModal}}
 */
const setModalFunctions = dispatch => ({
    openModal: (modal) => {
        dispatch(modalActions().creators.open.do(modal));
    },
    closeModal: () => {
        dispatch(modalActions().creators.close.do());
    },
});

/**
 *
 * @param dispatch
 * @returns {{openPanel: List.propTypes.openPanel, closePanel: HeaderScreen.propTypes.closePanel}}
 */
const setPanelFunctions = dispatch => ({
    openPanel: (panel) => {
        dispatch(panelActions().creators.open.do(panel));
    },
    closePanel: () => {
        dispatch(panelActions().creators.close.do());
    },
});

/**
 *
 * @param dispatch
 * @param creators
 * @param paramsList
 * @returns {{getList: Default.propTypes.getList, getDetail: List.propTypes.getDetail, getMore: List.propTypes.getMore, update: update, destroy: destroy}}
 */
const setScreenFunctions = (dispatch, creators, paramsList) => ({
    getList: (parameters = {}) => {
        if (creators) {
            dispatch(creators.search.request({
                ...paramsList, ...parameters,
            }));
        }
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
    create: (data) => {
        if (creators) dispatch(creators.create.request(data));
    },
    update: (id, data) => {
        if (creators) dispatch(creators.update.request(id, data));
    },
    destroy: (id) => {
        if (creators) dispatch(creators.destroy.request(id));
    },
});

export default ({
    model,
    component = Default,
    modal = false,
    panel = false,
    auth = true,
    mapDispatch,
    mapState,
} = {}) => {
    const {
        card = false,
        detail = false,
        panels = false,
        modals = false,
        form = false,
        creators = false,
        paramsList = {},
        withDelete = true,
    } = model || false;
    const { GetCurrent } = setScreenSelector(models.user.name);

    const mapStateToProps = state => ({
        state: {
            ...auth && { current: GetCurrent(state) },
            ...model && { model: model.name },
            ...modal && setModalState(state, setModalSelector),
            ...panel && setPanelState(state, setPanelSelector),
            ...model && setScreenState(state, setScreenSelector(model.name)),
        },
        ...mapState && mapState(state),
    });

    const mapDispatchToProps = dispatch => ({
        ...modal && setModalFunctions(dispatch),
        ...panel && setPanelFunctions(dispatch),
        ...model && setScreenFunctions(dispatch, creators, paramsList),
        ...mapDispatch && mapDispatch(dispatch),

        ...card && { card },
        ...detail && { detail },
        ...panels && { panels },
        ...modals && { modals },
        ...form && { form },

        withDelete,
    });

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(component));
};
