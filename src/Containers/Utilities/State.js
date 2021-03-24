export default (state, selectors) => {
    const { detail, getCurrent, list, loadingDestroy, loadingDetail, loadingList, paginationList, getModal, getPanel } = selectors;
    return {
        current: getCurrent(state),
        list: list(state),
        detail: detail(state),
        pagination: paginationList(state),
        panel: getPanel(state),
        modal: getModal(state),
        loadings: {
            list: loadingList(state),
            detail: loadingDetail(state),
            destroy: loadingDestroy(state),
        },
    };
};
