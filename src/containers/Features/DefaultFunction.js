export default (dispatch, creators, params) => ({
    load: () => {
        if (creators) dispatch(creators.search.request(params));
    },

    getMore: (page) => {
        if (creators) {
            dispatch(creators.more.request({
                params: {
                    ...params.params,
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
