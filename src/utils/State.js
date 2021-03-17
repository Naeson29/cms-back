// Selectors
import {detail, getCurrent, list, loadingDestroy, loadingDetail, loadingList, paginationList} from "../selectors/User";
import { getPanel } from '../selectors/Panel';
import { getModal } from '../selectors/Modal';


const additionalState = (model, state)=>{
    const additional = {
        user : {
            current: getCurrent(state)
        }
    };
    return !additional[model] ? {} : additional[model];
};

export default (state, model) => ({
    state : {
        model,
        // Default state
        list: list(state),
        loadingList: loadingList(state),
        pagination: paginationList(state),
        detail: detail(state),
        loadingDetail: loadingDetail(state),
        loadingDestroy: loadingDestroy(state),
        // More state
        ...additionalState(model, state),
        // Panel
        panel : getPanel(state),
        // Modal
        modal : getModal(state),
    }
});
