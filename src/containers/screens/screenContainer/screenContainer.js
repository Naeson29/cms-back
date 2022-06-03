import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// selectors
import {
    getScreenSelector,
    getModalSelector,
    getPanelSelector,
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
    const { List, Detail, Pagination, LoadingDestroy, LoadingDetail, LoadingList, LoadingEdit, ParamsList, FilterList, ErrorEdit } = selectors;
    return {
        params: ParamsList(state),
        filters: FilterList(state),
        list: List(state),
        detail: Detail(state),
        pagination: Pagination(state),
        loadings: {
            list: LoadingList(state),
            detail: LoadingDetail(state),
            destroy: LoadingDestroy(state),
            edit: LoadingEdit(state),
        },
        errors: {
            edit: ErrorEdit(state),
        },
    };
};

/**
 *
 * @param dispatch
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
 */
const setScreenFunctions = (dispatch, { creators }, params) => (!creators ? {} : {
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
    paginate: (page, parameters = {}) => {
        dispatch(creators.paginate.request({
            params: {
                ...params.params,
                ...parameters,
                page,
            },
        }));
    },
    refresh: (parameters = {}) => {
        dispatch(creators.refresh.request({
            ...params, ...parameters,
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
    screen = 'index',
    mapDispatch,
    mapState,
} = {}) => {
    const {
        route = '',
        creators = false,
        list = () => ({}),
        actions = {},
        renders = {},
    } = model || false;

    const { GetCurrent } = getScreenSelector('user');

    const constructor = action => ({
        list: actions.list && action === 'index',
        detail: actions.detail && (action === 'show' || action === 'update'),
    });

    const mapStateToProps = state => ({

        current: GetCurrent(state),
        actions: constructor(screen),
        screen,
        route,

        state: {
            ...model && { model: model.name },
            ...model && setScreenState(state, getScreenSelector(model.name)),
            ...setModalState(state, getModalSelector),
            ...setPanelState(state, getPanelSelector),
            screenList: list,
        },

        ...mapState && mapState(state),
    });

    const mapDispatchToProps = dispatch => ({

        ...setModalFunctions(dispatch),
        ...setPanelFunctions(dispatch),
        ...setScreenFunctions(dispatch, creators, list().parameters),

        ...renders && {
            ...renders.card && { card: renders.card },
            ...renders.detail && { detail: renders.detail },
            ...renders.modals && { modals: renders.modals.render },
            ...renders.form && { form: renders.form.render },
        },

        ...mapDispatch && mapDispatch(dispatch),
    });

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(component));
};
