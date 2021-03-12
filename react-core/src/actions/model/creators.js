
export const createDefaultModelActionCreators = types => ({
    search: {
        request(data, meta = null) {
            return {
                type: types.SEARCH.REQUEST,
                payload: data,
                meta,
            };
        },
        success(data, meta = null) {
            return {
                type: types.SEARCH.SUCCESS,
                payload: data,
                meta,
            };
        },
        failure(data, meta = null) {
            return {
                type: types.SEARCH.FAILURE,
                payload: data,
                meta,
            };
        },
    },
    create: {
        request(data, meta = null) {
            return {
                type: types.CREATE.REQUEST,
                payload: { data },
                meta,
            };
        },
        success(data, meta = null) {
            return {
                type: types.CREATE.SUCCESS,
                payload: data,
                meta,
            };
        },
        failure(data, meta = null) {
            return {
                type: types.CREATE.FAILURE,
                payload: data,
                meta,
            };
        },
    },
    read: {
        request(id, meta = null) {
            return {
                type: types.READ.REQUEST,
                payload: { id },
                meta,
            };
        },
        success(data, meta = null) {
            return {
                type: types.READ.SUCCESS,
                payload: data,
                meta,
            };
        },
        failure(data, meta = null) {
            return {
                type: types.READ.FAILURE,
                payload: data,
                meta,
            };
        },
    },
    update: {
        request(id, data, meta = null) {
            return {
                type: types.UPDATE.REQUEST,
                payload: { id, data },
                meta,
            };
        },
        success(data, meta = null) {
            return {
                type: types.UPDATE.SUCCESS,
                payload: data,
                meta,
            };
        },
        failure(data, meta = null) {
            return {
                type: types.UPDATE.FAILURE,
                payload: data,
                meta,
            };
        },
    },
    destroy: {
        request(id, meta = null) {
            return {
                type: types.DESTROY.REQUEST,
                payload: { id },
                meta,
            };
        },
        success(data, meta = null) {
            return {
                type: types.DESTROY.SUCCESS,
                payload: data,
                meta,
            };
        },
        failure(data, meta = null) {
            return {
                type: types.DESTROY.FAILURE,
                payload: data,
                meta,
            };
        },
    },
});

export default createDefaultModelActionCreators;
