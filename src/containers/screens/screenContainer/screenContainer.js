import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// models
import user from '../../../models/user';

// selectors
import {
    setScreenSelector,
    setModalSelector,
    setPanelSelector,
} from '../../../selectors';

// creators
import {
    modalActions,
    panelActions,
} from '../../../actions';

// Screen
import { defaultScreen } from '../../../components';

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
    const { List, Detail, Pagination, LoadingDestroy, LoadingDetail, LoadingList, LoadingEdit, ParamsList } = selectors;
    return {
        params: ParamsList(state),
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
const setScreenFunctions = (dispatch, creators, params) => ({
    getList: (parameters = {}) => {
        dispatch(creators.search.request({
            ...params, ...parameters,
        }));
    },
    getDetail: (id) => {
        dispatch(creators.read.request(id));
    },
    getMore: (page) => {
        dispatch(creators.more.request({
            params: {
                ...params.params,
                page,
            },
        }));
    },
    paginate: (page) => {
        dispatch(creators.paginate.request({
            params: {
                ...params.params,
                page,
            },
        }));
    },
    create: (data) => {
        dispatch(creators.create.request(data));
    },
    update: (id, data) => {
        dispatch(creators.update.request(id, data));
    },
    destroy: (id) => {
        dispatch(creators.destroy.request(id));
    },
});

export default ({
    model,
    component = defaultScreen,
    action = 'index',
    modal = false,
    panel = false,
    mapDispatch,
    mapState,
} = {}) => {
    const {
        path = '',
        list = {
            parameters: {},
            searches: {},
            orders: [],
            filters: [],
        },
        renders = {},
        modals = false,
        form = false,
        creators = false,
        withDelete = true,
    } = model || false;
    const { GetCurrent } = setScreenSelector(user.name);

    const mapStateToProps = state => ({
        state: {
            current: GetCurrent(state),
            path,
            action,
            parametersList: list,
            ...modal && setModalState(state, setModalSelector),
            ...panel && setPanelState(state, setPanelSelector),
            ...model && {
                model: model.name,
                ...setScreenState(state, setScreenSelector(model.name)),
            },
        },
        ...mapState && mapState(state),
    });

    const mapDispatchToProps = dispatch => ({
        ...mapDispatch && mapDispatch(dispatch),
        ...creators && setScreenFunctions(dispatch, creators, list.parameters),
        ...modal && setModalFunctions(dispatch),
        ...panel && setPanelFunctions(dispatch),
        ...renders.card && { card: renders.card },
        ...renders.detail && { detail: renders.detail },
        ...modals && { modals },
        ...form && { form },

        withDelete,
    });

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(component));
};
