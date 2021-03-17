// Selectors
import {
    detail, getCurrent, list, loadingDestroy, loadingDetail, loadingList, paginationList,
} from '../selectors/User';
import { getPanel } from '../selectors/Panel';
import { getModal } from '../selectors/Modal';

import { getRoles } from './Role';

const getAllowButtons = (model, current) => {
    const { isAdmin, isSuperUser, isUser } = getRoles(current);

    const allows = {
        user: {
            edit: isAdmin || isSuperUser || isUser,
            trash: isAdmin || isSuperUser,
        },
    };

    return allows[model];
};

/* const additionalState = (model, state) => {
    const additional = {

    };
    return !additional[model] ? {} : additional[model];
}; */

export default (state, model) => ({
    state: {
        model,
        // Default state
        list: list(state),
        loadingList: loadingList(state),
        pagination: paginationList(state),
        detail: detail(state),
        loadingDetail: loadingDetail(state),
        loadingDestroy: loadingDestroy(state),
        // More state
        current: getCurrent(state),
        // Panel
        panel: getPanel(state),
        // Modal
        modal: getModal(state),
        // Allows
        allowButton: getAllowButtons(model, getCurrent(state)),
    },
});
