// Selectors
import {detail, getCurrent, list, loadingDestroy, loadingDetail, loadingList, paginationList} from "../selectors/User";

const defaultState = (state) => ({
    list: list(state),
    detail: detail(state),
    loadingList: loadingList(state),
    loadingDestroy: loadingDestroy(state),
    loadingDetail: loadingDetail(state),
    pagination: paginationList(state),
})

const userState = (state)=> ({
    ...defaultState(state),
    current: getCurrent(state)
});

export {defaultState, userState};
