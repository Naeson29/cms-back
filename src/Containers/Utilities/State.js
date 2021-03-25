export default (state, selectors) => {
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
