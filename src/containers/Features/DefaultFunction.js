export default (dispatch, creators, params) => ({
    load: () => {
        if(creators) dispatch(creators.search.request(params));
    },
    getMore: (page) => {
        if(creators) dispatch(creators.more.request({
            params: {
                ...params.params,
                page,
            },
        }));
    },

    getDetail: (params) => {
        if(creators) dispatch(creators.read.request(params));
    },
});
