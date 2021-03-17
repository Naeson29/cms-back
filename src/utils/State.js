// Selectors
import {
    detail, getCurrent, list, loadingDestroy, loadingDetail, loadingList, paginationList,
} from '../selectors/User';
import { getPanel } from '../selectors/Panel';
import { getModal } from '../selectors/Modal';

// Utils
import getRoles from './Role';

const getAllowButtons = (model, current) => {
    const roles = getRoles(current);
    const { isAdmin, isSuperUser } = roles;

    const allows = {
        user: {
            role : {
                [Object.keys(roles).find(key => !!roles[key])] : true
            },
            edit: isAdmin || isSuperUser,
            trash: isAdmin || isSuperUser,
        },
    };

    return allows[model];
};

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
