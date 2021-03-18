// Selectors
import {
    detail, getCurrent, list, loadingDestroy, loadingDetail, loadingList, paginationList,
} from '../../Selectors/User';
import { getPanel } from '../../Selectors/Panel';
import { getModal } from '../../Selectors/Modal';

export default (state, model) => ({
    state: {
        model,
        // Default state
        current: getCurrent(state),
        list: list(state),
        loadingList: loadingList(state),
        pagination: paginationList(state),
        detail: detail(state),
        loadingDetail: loadingDetail(state),
        loadingDestroy: loadingDestroy(state),
        // Panel
        panel: getPanel(state),
        // Modal
        modal: getModal(state),
    },
});
