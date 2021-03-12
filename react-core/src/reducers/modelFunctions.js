/* DEFAULT START */
export const defaultRequest = (state, section) => ({
    ...state,
    views: {
        ...state.views,
        [section]: {
            ...state.views[section],
            error: null,
            loading: true,
        },
    },
});

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

export const searchSuccess = (state, { data, current_page, per_page, total }, section) => ({ // eslint-disable-line camelcase
    ...state,
    data: { ...state.data, ...data.reduce((acc, current) => ({ ...acc, [current.id]: current }), {}) },
    views: {
        ...state.views,
        [section]: {
            ...state.views[section],
            results: data.map(({ id }) => id),
            pagination: {
                current_page,
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

/* CREATE START */
export const createRequest = defaultRequest;

export const createSuccess = (state, data, section) => ({
    ...state,
    data: {
        ...state.data,
        [data.id]: data,
    },
    views: {
        ...state.views,
        [section]: {
            ...state.views[section],
            error: null,
            loading: false,
        },
    },
});

export const createFailure = defaultFailure;
/* CREATE END */

/* READ START */
export const readRequest = defaultRequest;
export const readFailure = defaultFailure;

export const readSuccess = (state, data, section) => ({
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
            error: null,
            loading: false,
        },
    },
});
/* DEFAULT END */

/* UPDATE START */
export const updateRequest = defaultRequest;

export const updateSuccess = (state, data, section) => ({
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
            error: null,
            loading: false,
        },
    },
});

export const updateFailure = defaultFailure;
/* UPDATE END */

/* DESTROY START */
export const destroyRequest = defaultRequest;

export const destroySuccess = (state, data, section) => {
    const {views} = state;
    delete state.data[data.id];
    const results = views.index.results.filter(key => key !== data.id);

    return {
        ...state,
        data: {
            ...state.data
        },
        views: {
            ...views,
            [section]: {
                ...views[section],
                error: null,
                loading: false,
            },
            index : {
                ...views.index,
                results : [...results]
            }
        },
    }
};

export const destroyFailure = defaultFailure;
/* DESTROY END */
