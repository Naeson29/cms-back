/* DEFAULT START */
export const defaultNone = state => ({
    ...state,
});

export const defaultRequest = (state, section, action = {}) => {
    const { payload = {} } = action;

    return {
        ...state,
        views: {
            ...state.views,
            [section]: {
                ...state.views[section],
                error: null,
                loading: true,
                ...payload.params && {
                    params: payload.params,
                },
            },
        },
    };
};

export const defaultFailure = (state, payload, section) => ({
    ...state,
    views: {
        ...state.views,
        [section]: {
            ...state.views[section],
            error: payload,
            loading: false,
        },
    },
});
/* DEFAULT END */

/* SEARCH START */
export const searchRequest = defaultRequest;

export const searchSuccess = (state, { data, current_page, per_page, total, last_page }, section) => ({ // eslint-disable-line camelcase
    ...state,
    data: {
        ...state.data,
        ...data.reduce((acc, current) => ({
            ...acc, [current.id]: current,
        }), {}),
    },
    views: {
        ...state.views,
        [section]: {
            ...state.views[section],
            results: data.map(({ id }) => id),
            pagination: {
                current_page,
                last_page,
                per_page,
                total,
            },
            loading: false,
            error: null,
        },
    },
});

export const searchFailure = defaultFailure;
/* SEARCH END */

/* MORE START */
export const moreRequest = defaultNone;

export const moreSuccess = (state, { data, current_page, per_page, total, last_page }, section) => ({ // eslint-disable-line camelcase
    ...state,
    data: {
        ...state.data,
        ...data.reduce((acc, current) => ({
            ...acc, [current.id]: current,
        }), {}),
    },
    views: {
        ...state.views,
        [section]: {
            ...state.views[section],
            results: [
                ...state.views[section].results,
                ...data.map(({ id }) => id),
            ],
            pagination: {
                current_page,
                last_page,
                per_page,
                total,
            },
            loading: false,
            error: null,
        },
    },
});

export const moreFailure = defaultFailure;
/* MORE END */

/* PAGINATE START */
export const paginateRequest = defaultRequest;

export const paginateSuccess = searchSuccess;

export const paginateFailure = defaultFailure;
/* PAGINATE END */


/* CREATE START */
export const createRequest = defaultRequest;

export const createSuccess = (state, { data }, section) => {
    const { index } = state.views;
    const { results } = index;

    return {
        ...state,
        data: {
            ...state.data,
            [data.id]: data,
        },
        views: {
            ...state.views,
            [section]: {
                ...state.views[section],
                result: data.id,
                error: null,
                loading: false,
            },
            index: {
                ...index,
                results: [...results, data.id],
            },
        },
    };
};

export const createFailure = defaultFailure;
/* CREATE END */

/* READ START */
export const readRequest = defaultRequest;

export const readFailure = defaultFailure;

export const readSuccess = (state, { data }, section) => ({
    ...state,
    data: {
        ...state.data,
        [data.id]: {
            ...state.data[data.id],
            ...data,
        },
    },
    views: {
        ...state.views,
        [section]: {
            ...state.views[section],
            result: data.id,
            error: null,
            loading: false,
        },
    },
});
/* DEFAULT END */

/* UPDATE START */
export const updateRequest = defaultRequest;

export const updateSuccess = (state, { data }, section) => ({
    ...state,
    data: {
        ...state.data,
        [data.id]: {
            ...state.data[data.id],
            ...data,
        },
    },
    views: {
        ...state.views,
        [section]: {
            ...state.views[section],
            result: data.id,
            error: null,
            loading: false,
        },
    },
});

export const updateFailure = defaultFailure;
/* UPDATE END */

/* DESTROY START */
export const destroyRequest = defaultRequest;

export const destroySuccess = (state, { data }, section) => {
    const { views } = state;

    return {
        ...state,
        data: {
            ...Object.keys(state.data).filter(key => key !== data.id).reduce((obj, key) => ({
                ...obj, [key]: state.data[key],
            }), {}),
        },
        views: {
            ...views,
            [section]: {
                ...views[section],
                result: data.id,
                error: null,
                loading: false,
            },
            index: {
                ...views.index,
                results: [...views.index.results.filter(key => key !== data.id)],
            },
        },
    };
};

export const destroyFailure = defaultFailure;
/* DESTROY END */
