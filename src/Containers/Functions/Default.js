export default (dispatch, creators, paramsList) => ({
    load: () => {
        if (creators) dispatch(creators.search.request(paramsList));
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

    getDetail: (id) => {
        if (creators) dispatch(creators.read.request(id));
    },

    destroy: (id) => {
        if (creators) dispatch(creators.destroy.request(id));
    },
});
