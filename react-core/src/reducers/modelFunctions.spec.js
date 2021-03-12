import * as ModelReducerFunctions from './modelFunctions';

const expectNoStateMutation = fn => () => {
    const state = {
        data: {},
        views: {
            spec: {
                error: null,
                loading: false,
            },
        },
    };
    const stateBackup = { ...state };

    expect(fn(state, { data: [] })).not.toBe(state);
    expect(state).toStrictEqual(stateBackup);
};

describe('ModelReducerFunctions', () => {
    /* DEFAULT START */
    describe('.defaultRequest', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.defaultRequest).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.defaultRequest).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.defaultRequest));

        it('disables any error and enables loading on the passed views section without any other changes', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: 'specError',
                        loading: false,
                    },
                },
            };

            const expectedState = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: true,
                    },
                },
            };

            expect(ModelReducerFunctions.defaultRequest(state, 'spec')).toStrictEqual(expectedState);
        });
    });

    describe('.defaultFailure', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.defaultFailure).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.defaultFailure).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.defaultFailure));

        it('fills the error value and disables loading on the passed views section without any other changes', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: true,
                    },
                },
            };

            const expectedState = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: 'specError',
                        loading: false,
                    },
                },
            };

            expect(ModelReducerFunctions.defaultFailure(state, 'specError', 'spec'))
                .toStrictEqual(expectedState);
        });
    });
    /* DEFAULT END */

    /* SEARCH START */
    describe('.searchRequest', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.searchRequest).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.searchRequest).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.searchRequest));

        it('is an alias for .defaultRequest', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: 'specError',
                        loading: false,
                    },
                },
            };
            expect(ModelReducerFunctions.searchRequest(state, 'spec'))
                .toStrictEqual(ModelReducerFunctions.defaultRequest(state, 'spec'));
        });
    });

    describe('.searchSuccess', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.searchSuccess).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.searchSuccess).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.searchSuccess));

        it('adds the fetched models data, updates the pagination, disables the error value \
and disables loading on the passed views section without any other changes', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                data: { originalKey: 'originalValue' },
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: 'specError',
                        loading: true,
                    },
                },
            };

            const expectedState = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                data: {
                    key: { id: 'key', value: 'spec' },
                    originalKey: 'originalValue',
                },
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: false,
                        results: ['key'],
                        pagination: {
                            current_page: 'current_page',
                            per_page: 'per_page',
                            total: 'total',
                        },
                    },
                },
            };

            const payload = {
                data: [{ id: 'key', value: 'spec' }],
                current_page: 'current_page',
                per_page: 'per_page',
                total: 'total',
            };

            expect(ModelReducerFunctions.searchSuccess(state, payload, 'spec'))
                .toStrictEqual(expectedState);
        });
    });

    describe('.searchFailure', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.searchFailure).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.searchFailure).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.searchFailure));

        it('is an alias for .defaultFailure', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: true,
                    },
                },
            };

            expect(ModelReducerFunctions.searchFailure(state, 'specError', 'spec'))
                .toStrictEqual(ModelReducerFunctions.defaultFailure(state, 'specError', 'spec'));
        });
    });
    /* SEARCH END */

    /* CREATE START */
    describe('.createRequest', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.createRequest).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.createRequest).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.createRequest));

        it('is an alias for .defaultRequest', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: 'specError',
                        loading: false,
                    },
                },
            };
            expect(ModelReducerFunctions.createRequest(state, 'spec'))
                .toStrictEqual(ModelReducerFunctions.defaultRequest(state, 'spec'));
        });
    });

    describe('.createSuccess', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.createSuccess).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.createSuccess).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.createSuccess));

        it('adds the created model data, disables the error value \
and disables loading on the passed views section without any other changes', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                data: { originalKey: 'originalValue' },
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: 'specError',
                        loading: true,
                    },
                },
            };

            const expectedState = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                data: {
                    id: {
                        id: 'id',
                        key: 'value',
                    },
                    originalKey: 'originalValue',
                },
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: false,
                    },
                },
            };

            expect(ModelReducerFunctions.createSuccess(state, { data: { id: 'id', key: 'value' } }, 'spec'))
                .toStrictEqual(expectedState);
        });
    });

    describe('.createFailure', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.createFailure).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.createFailure).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.createFailure));

        it('is an alias for .defaultFailure', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: true,
                    },
                },
            };

            expect(ModelReducerFunctions.createFailure(state, 'specError', 'spec'))
                .toStrictEqual(ModelReducerFunctions.defaultFailure(state, 'specError', 'spec'));
        });
    });
    /* CREATE END */

    /* READ START */
    describe('.readRequest', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.readRequest).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.readRequest).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.readRequest));

        it('is an alias for .defaultRequest', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: 'specError',
                        loading: false,
                    },
                },
            };
            expect(ModelReducerFunctions.readRequest(state, 'spec'))
                .toStrictEqual(ModelReducerFunctions.defaultRequest(state, 'spec'));
        });
    });

    describe('.readSuccess', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.readSuccess).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.readSuccess).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.readSuccess));

        it('adds the read model data, disables the error value \
and disables loading on the passed views section without any other changes', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                data: {
                    id: {
                        id: 'id',
                        originalKey1: 'originalValue1',
                        originalKey2: 'originalValue2',
                    },
                },
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: 'specError',
                        loading: true,
                    },
                },
            };

            const expectedState = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                data: {
                    id: {
                        id: 'id',
                        originalKey1: 'value1',
                        originalKey2: 'originalValue2',
                        key: 'value',
                    },
                },
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: false,
                    },
                },
            };

            expect(ModelReducerFunctions.readSuccess(state, { data: { id: 'id', key: 'value', originalKey1: 'value1' } }, 'spec'))
                .toStrictEqual(expectedState);
        });
    });

    describe('.readFailure', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.readFailure).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.readFailure).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.readFailure));

        it('is an alias for .defaultFailure', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: true,
                    },
                },
            };

            expect(ModelReducerFunctions.readFailure(state, 'specError', 'spec'))
                .toStrictEqual(ModelReducerFunctions.defaultFailure(state, 'specError', 'spec'));
        });
    });
    /* READ END */

    /* UPDATE START */
    describe('.updateSuccess', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.updateSuccess).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.updateSuccess).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.updateSuccess));

        it('adds the update model data, disables the error value \
and disables loading on the passed views section without any other changes', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                data: {
                    id: {
                        id: 'id',
                        originalKey: 'originalValue',
                    },
                },
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: 'specError',
                        loading: true,
                    },
                },
            };

            const expectedState = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                data: {
                    id: {
                        id: 'id',
                        originalKey: 'originalValue',
                        key: 'value',
                    },
                },
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: false,
                    },
                },
            };

            expect(ModelReducerFunctions.updateSuccess(state, { data: { id: 'id', key: 'value' } }, 'spec'))
                .toStrictEqual(expectedState);
        });
    });

    describe('.updateFailure', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.updateFailure).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.updateFailure).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.updateFailure));

        it('is an alias for .defaultFailure', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: true,
                    },
                },
            };

            expect(ModelReducerFunctions.updateFailure(state, 'specError', 'spec'))
                .toStrictEqual(ModelReducerFunctions.defaultFailure(state, 'specError', 'spec'));
        });
    });
    /* UPDATE END */

    /* DESTROY START */
    describe('.destroySuccess', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.destroySuccess).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.destroySuccess).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.destroySuccess));

        it('adds the destroy model data, disables the error value \
and disables loading on the passed views section without any other changes', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                data: {
                    id: {
                        id: 'id',
                        originalKey: 'originalValue',
                    },
                },
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: 'specError',
                        loading: true,
                    },
                },
            };

            const expectedState = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                data: {
                    id: {
                        id: 'id',
                        originalKey: 'originalValue',
                        key: 'value',
                    },
                },
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: false,
                    },
                },
            };

            expect(ModelReducerFunctions.destroySuccess(state, { data: { id: 'id', key: 'value' } }, 'spec'))
                .toStrictEqual(expectedState);
        });
    });

    describe('.destroyFailure', () => {
        it('is provided', () => {
            expect(ModelReducerFunctions.destroyFailure).toBeDefined();
        });

        it('is a function', () => {
            expect(ModelReducerFunctions.destroyFailure).toBeInstanceOf(Function);
        });

        it('does not mutate the state', expectNoStateMutation(ModelReducerFunctions.destroyFailure));

        it('is an alias for .defaultFailure', () => {
            const state = {
                additionalStateFieldKey: 'additionalStateFieldValue',
                views: {
                    additionalViewsFieldKey: 'additionalViewsFieldValue',
                    spec: {
                        additionalSectionFieldKey: 'additionalSectionFieldValue',
                        error: null,
                        loading: true,
                    },
                },
            };

            expect(ModelReducerFunctions.destroyFailure(state, 'specError', 'spec'))
                .toStrictEqual(ModelReducerFunctions.defaultFailure(state, 'specError', 'spec'));
        });
    });
    /* DESTROY END */
});
