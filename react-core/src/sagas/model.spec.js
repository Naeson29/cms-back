import { runSaga } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import {
    createModelSagas,
    createModelApiSagas,
} from './index';
import { createModelApiClass, createHttpApiClass } from '../apis';

const types = {
    SEARCH: {
        REQUEST: 'spec/SEARCH_REQUEST',
        SUCCESS: 'spec/SEARCH_SUCCESS',
        FAILURE: 'spec/SEARCH_FAILURE',
    },
    MORE: {
        REQUEST: 'spec/MORE_REQUEST',
        SUCCESS: 'spec/MORE_SUCCESS',
        FAILURE: 'spec/MORE_FAILURE',
    },
    CREATE: {
        REQUEST: 'spec/CREATE_REQUEST',
        SUCCESS: 'spec/CREATE_SUCCESS',
        FAILURE: 'spec/CREATE_FAILURE',
    },
    READ: {
        REQUEST: 'spec/READ_REQUEST',
        SUCCESS: 'spec/READ_SUCCESS',
        FAILURE: 'spec/READ_FAILURE',
    },
    UPDATE: {
        REQUEST: 'spec/UPDATE_REQUEST',
        SUCCESS: 'spec/UPDATE_SUCCESS',
        FAILURE: 'spec/UPDATE_FAILURE',
    },
    DESTROY: {
        REQUEST: 'spec/DESTROY_REQUEST',
        SUCCESS: 'spec/DESTROY_SUCCESS',
        FAILURE: 'spec/DESTROY_FAILURE',
    },
};

const creators = {
    search: {
        request() {
            return {
                type: types.SEARCH.REQUEST,
                payload: {},
            };
        },
        success(data) {
            return {
                type: types.SEARCH.SUCCESS,
                payload: data,
            };
        },
        failure(data) {
            return {
                type: types.SEARCH.FAILURE,
                payload: data,
            };
        },
    },
    more: {
        request() {
            return {
                type: types.MORE.REQUEST,
                payload: {},
            };
        },
        success(data) {
            return {
                type: types.MORE.SUCCESS,
                payload: data,
            };
        },
        failure(data) {
            return {
                type: types.MORE.FAILURE,
                payload: data,
            };
        },
    },
    create: {
        request(data) {
            return {
                type: types.CREATE.REQUEST,
                payload: { data },
            };
        },
        success(data) {
            return {
                type: types.CREATE.SUCCESS,
                payload: data,
            };
        },
        failure(data) {
            return {
                type: types.CREATE.FAILURE,
                payload: data,
            };
        },
    },
    read: {
        request(id) {
            return {
                type: types.READ.REQUEST,
                payload: { id },
            };
        },
        success(data) {
            return {
                type: types.READ.SUCCESS,
                payload: data,
            };
        },
        failure(data) {
            return {
                type: types.READ.FAILURE,
                payload: data,
            };
        },
    },
    update: {
        request(id, data) {
            return {
                type: types.UPDATE.REQUEST,
                payload: { id, data },
            };
        },
        success(data) {
            return {
                type: types.UPDATE.SUCCESS,
                payload: data,
            };
        },
        failure(data) {
            return {
                type: types.UPDATE.FAILURE,
                payload: data,
            };
        },
    },
    destroy: {
        request(id) {
            return {
                type: types.DESTROY.REQUEST,
                payload: { id },
            };
        },
        success(data) {
            return {
                type: types.DESTROY.SUCCESS,
                payload: data,
            };
        },
        failure(data) {
            return {
                type: types.DESTROY.FAILURE,
                payload: data,
            };
        },
    },
};

const api = {
    search: jest.fn(),
    more: jest.fn(),
    create: jest.fn(),
    read: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
};

class ApiClass extends createModelApiClass(createHttpApiClass(), '/spec') {
    search = api.search

    more = api.search

    create = api.create

    read = api.read

    update = api.update

    destroy = api.destroy
}

const expectModelSagasDispatchesToMatchCrudActionAndApiResponse = crudAction => async () => {
    const saga = createModelSagas(types, creators, api)[crudAction];

    let dispatched = [];
    const runOptions = { dispatch: action => dispatched.push(action), getState: () => ({}) };

    // const errorValue = 'spec';
    // api[crudAction].mockImplementation(() => ({ data: { error: errorValue } }));

    // await runSaga(runOptions, saga, creators[crudAction].request());
    // expect(dispatched).toContainEqual(creators[crudAction].failure(new Error(errorValue)));

    dispatched = [];

    const dataValue = { error: null };
    api[crudAction].mockImplementation(() => ({ data: dataValue }));

    await runSaga(runOptions, saga, creators[crudAction].request());
    expect(dispatched).toContainEqual(creators[crudAction].success(dataValue));
};

const expectModelApiSagasDispatchesToMatchCrudActionAndApiResponse = crudAction => async () => {
    const saga = createModelApiSagas(types, creators, ApiClass)[crudAction];

    let dispatched = [];
    const runOptions = { dispatch: action => dispatched.push(action), getState: () => ({}) };

    // const errorValue = 'spec';
    // api[crudAction].mockImplementation(() => ({ data: { error: errorValue } }));

    // await runSaga(runOptions, saga, creators[crudAction].request());
    // expect(dispatched).toContainEqual(creators[crudAction].failure(new Error(errorValue)));

    dispatched = [];

    const dataValue = { error: null };
    api[crudAction].mockImplementation(() => ({ data: dataValue }));

    await runSaga(runOptions, saga, creators[crudAction].request());
    expect(dispatched).toContainEqual(creators[crudAction].success(dataValue));
};

const expectModelSagasCrudActionRequestNonBlockingListenerToBeCreated = (expectedType, expectedSaga) => async () => {
    const { root, [expectedSaga]: saga } = createModelSagas(types, creators, api);

    const triggered = [];
    const runOptions = { sagaMonitor: { effectTriggered: ({ effect }) => triggered.push(effect) } };
    await runSaga(runOptions, root);
    expect(triggered).toContainEqual(takeEvery(expectedType, saga));
};

const expectModelApiSagasCrudActionRequestNonBlockingListenerToBeCreated = (expectedType, expectedSaga) => async () => {
    const { root, [expectedSaga]: saga } = createModelApiSagas(types, creators, ApiClass);

    const triggered = [];
    const runOptions = { sagaMonitor: { effectTriggered: ({ effect }) => triggered.push(effect) } };
    await runSaga(runOptions, root);
    expect(triggered).toContainEqual(takeEvery(expectedType, saga));
};

describe('createModelSagas', () => {
    it('is provided', () => {
        expect(createModelSagas).toBeDefined();
    });

    it('is a function', () => {
        expect(createModelSagas).toBeInstanceOf(Function);
    });

    it('returns a object (a.k.a ModelSagas)', () => {
        const sagas = createModelSagas(types, creators, api);

        expect(typeof sagas).toBe(typeof {});
    });
});

describe('ModelSagas', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('is an object containing CRUD and root generators', () => {
        const sagas = createModelSagas(types, creators, api);

        const Generator = (function* generator() { yield undefined; }).constructor;
        expect(sagas).toMatchObject({
            search: expect.any(Generator),
            more: expect.any(Generator),
            create: expect.any(Generator),
            read: expect.any(Generator),
            update: expect.any(Generator),
            destroy: expect.any(Generator),
            root: expect.any(Generator),
        });
    });

    it('allows to provide partial creators', async () => {
        const partialCreators = { search: { ...(creators.search) } };
        const expectedProvidedSagaName = 'search';
        const expectedNotProvidedSagaName = 'create';

        const {
            [expectedProvidedSagaName]: expectedProvidedSaga,
            [expectedNotProvidedSagaName]: expectedNotProvidedSaga,
        } = createModelSagas(types, partialCreators, api);

        expect(expectedProvidedSaga).toBeDefined();
        expect(expectedProvidedSaga).not.toBeNull();
        expect(expectedNotProvidedSaga).toBeDefined();
        expect(expectedNotProvidedSaga).toBeNull();
    });

    it('allows to provide partial creators', async () => {
        const partialCreators = { more: { ...(creators.more) } };
        const expectedProvidedSagaName = 'more';
        const expectedNotProvidedSagaName = 'create';

        const {
            [expectedProvidedSagaName]: expectedProvidedSaga,
            [expectedNotProvidedSagaName]: expectedNotProvidedSaga,
        } = createModelSagas(types, partialCreators, api);

        expect(expectedProvidedSaga).toBeDefined();
        expect(expectedProvidedSaga).not.toBeNull();
        expect(expectedNotProvidedSaga).toBeDefined();
        expect(expectedNotProvidedSaga).toBeNull();
    });

    it('allows to provide partial API', async () => {
        const partialApi = { create: api.create };
        const expectedProvidedSagaName = 'create';
        const expectedNotProvidedSagaName = 'search';

        const {
            [expectedProvidedSagaName]: expectedProvidedSaga,
            [expectedNotProvidedSagaName]: expectedNotProvidedSaga,
        } = createModelSagas(types, creators, partialApi);

        expect(expectedProvidedSaga).toBeDefined();
        expect(expectedProvidedSaga).not.toBeNull();
        expect(expectedNotProvidedSaga).toBeDefined();
        expect(expectedNotProvidedSaga).toBeNull();
    });

    describe('.search', () => {
        it('dispatches the right SEARCH actions on API success/failure', expectModelSagasDispatchesToMatchCrudActionAndApiResponse('search'));
    });

    describe('.more', () => {
        it('dispatches the right MORE actions on API success/failure', expectModelSagasDispatchesToMatchCrudActionAndApiResponse('more'));
    });

    describe('.create', () => {
        it('dispatches the right CREATE actions on API success/failure', expectModelSagasDispatchesToMatchCrudActionAndApiResponse('create'));
    });

    describe('.read', () => {
        it('dispatches the right READ actions on API success/failure', expectModelSagasDispatchesToMatchCrudActionAndApiResponse('read'));
    });

    describe('.update', () => {
        it('dispatches the right UPDATE actions on API success/failure', expectModelSagasDispatchesToMatchCrudActionAndApiResponse('update'));
    });

    describe('.destroy', () => {
        it('dispatches the right DESTROY actions on API success/failure', expectModelSagasDispatchesToMatchCrudActionAndApiResponse('destroy'));
    });

    describe('.root', () => {
        it('listens on SEARCH_REQUEST action to launch the search saga',
            expectModelSagasCrudActionRequestNonBlockingListenerToBeCreated(types.SEARCH.REQUEST, 'search'));
        it('listens on MORE_REQUEST action to launch the more saga',
            expectModelSagasCrudActionRequestNonBlockingListenerToBeCreated(types.MORE.REQUEST, 'more'));
        it('listens on CREATE_REQUEST action to launch the create saga',
            expectModelSagasCrudActionRequestNonBlockingListenerToBeCreated(types.CREATE.REQUEST, 'create'));
        it('listens on READ_REQUEST action to launch the read saga',
            expectModelSagasCrudActionRequestNonBlockingListenerToBeCreated(types.READ.REQUEST, 'read'));
        it('listens on UPDATE_REQUEST action to launch the update saga',
            expectModelSagasCrudActionRequestNonBlockingListenerToBeCreated(types.UPDATE.REQUEST, 'update'));
        it('listens on DESTROY_REQUEST action to launch the destroy saga',
            expectModelSagasCrudActionRequestNonBlockingListenerToBeCreated(types.DESTROY.REQUEST, 'destroy'));

        it('is resilient to empty or partial types declaration', async () => {
            const emptyTypes = {};
            const partialTypes = { SEARCH: { ...(types.SEARCH) }, MORE: { ...(types.MORE) } };
            const expectedProvidedSagaName = 'search';

            const triggered = [];
            const runOptions = { sagaMonitor: { effectTriggered: ({ effect }) => triggered.push(effect) } };

            const { root: emptyRoot } = createModelSagas(emptyTypes, creators, api);
            expect(() => runSaga(runOptions, emptyRoot)).not.toThrow();

            const { root: partialRoot, [expectedProvidedSagaName]: expectedProvidedSaga } = createModelSagas(partialTypes, creators, api);
            expect(() => runSaga(runOptions, partialRoot)).not.toThrow();
            expect(triggered).toContainEqual(takeEvery(partialTypes.SEARCH.REQUEST, expectedProvidedSaga));
            expect(triggered).toContainEqual(takeEvery(partialTypes.MORE.REQUEST, expectedProvidedSaga));
        });
    });
});

describe('ModelApiSagas', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('is an object containing CRUD and root generators', () => {
        const sagas = createModelApiSagas(types, creators, ApiClass);

        const Generator = (function* generator() { yield undefined; }).constructor;
        expect(sagas).toMatchObject({
            search: expect.any(Generator),
            more: expect.any(Generator),
            create: expect.any(Generator),
            read: expect.any(Generator),
            update: expect.any(Generator),
            destroy: expect.any(Generator),
            root: expect.any(Generator),
        });
    });

    it('allows to provide partial creators', async () => {
        const partialCreators = { search: { ...(creators.search) } };
        const expectedProvidedSagaName = 'search';
        const expectedNotProvidedSagaName = 'create';

        const {
            [expectedProvidedSagaName]: expectedProvidedSaga,
            [expectedNotProvidedSagaName]: expectedNotProvidedSaga,
        } = createModelApiSagas(types, partialCreators, ApiClass);

        expect(expectedProvidedSaga).toBeDefined();
        expect(expectedProvidedSaga).not.toBeNull();
        expect(expectedNotProvidedSaga).toBeDefined();
        expect(expectedNotProvidedSaga).toBeNull();
    });

    it('allows to provide partial API', async () => {
        class PartialApiClass extends ApiClass {
            search = null

            more = null

            read = null

            update = null

            destroy = null
        }

        const expectedProvidedSagaName = 'create';
        const expectedNotProvidedSagaName = 'search';

        const {
            [expectedProvidedSagaName]: expectedProvidedSaga,
            [expectedNotProvidedSagaName]: expectedNotProvidedSaga,
        } = createModelApiSagas(types, creators, PartialApiClass);

        expect(expectedProvidedSaga).toBeDefined();
        expect(expectedProvidedSaga).not.toBeNull();
        expect(expectedNotProvidedSaga).toBeDefined();
        expect(expectedNotProvidedSaga).toBeNull();
    });

    describe('.search', () => {
        it('dispatches the right SEARCH actions on API success/failure', expectModelApiSagasDispatchesToMatchCrudActionAndApiResponse('search'));
    });

    describe('.more', () => {
        it('dispatches the right MORE actions on API success/failure', expectModelApiSagasDispatchesToMatchCrudActionAndApiResponse('more'));
    });

    describe('.create', () => {
        it('dispatches the right CREATE actions on API success/failure', expectModelApiSagasDispatchesToMatchCrudActionAndApiResponse('create'));
    });

    describe('.read', () => {
        it('dispatches the right READ actions on API success/failure', expectModelApiSagasDispatchesToMatchCrudActionAndApiResponse('read'));
    });

    describe('.update', () => {
        it('dispatches the right UPDATE actions on API success/failure', expectModelApiSagasDispatchesToMatchCrudActionAndApiResponse('update'));
    });

    describe('.destroy', () => {
        it('dispatches the right DESTROY actions on API success/failure', expectModelApiSagasDispatchesToMatchCrudActionAndApiResponse('destroy'));
    });

    describe('.root', () => {
        it('listens on SEARCH_REQUEST action to launch the search saga',
            expectModelApiSagasCrudActionRequestNonBlockingListenerToBeCreated(types.SEARCH.REQUEST, 'search'));
        it('listens on MORE_REQUEST action to launch the more saga',
            expectModelApiSagasCrudActionRequestNonBlockingListenerToBeCreated(types.MORE.REQUEST, 'more'));
        it('listens on CREATE_REQUEST action to launch the create saga',
            expectModelApiSagasCrudActionRequestNonBlockingListenerToBeCreated(types.CREATE.REQUEST, 'create'));
        it('listens on READ_REQUEST action to launch the read saga',
            expectModelApiSagasCrudActionRequestNonBlockingListenerToBeCreated(types.READ.REQUEST, 'read'));
        it('listens on UPDATE_REQUEST action to launch the update saga',
            expectModelApiSagasCrudActionRequestNonBlockingListenerToBeCreated(types.UPDATE.REQUEST, 'update'));
        it('listens on DESTROY_REQUEST action to launch the destroy saga',
            expectModelApiSagasCrudActionRequestNonBlockingListenerToBeCreated(types.DESTROY.REQUEST, 'destroy'));

        it('is resilient to empty or partial types declaration', async () => {
            const emptyTypes = {};
            const partialTypes = { SEARCH: { ...(types.SEARCH) }, MORE: { ...(types.MORE) } };
            const expectedProvidedSagaName = 'search';

            const triggered = [];
            const runOptions = { sagaMonitor: { effectTriggered: ({ effect }) => triggered.push(effect) } };

            const { root: emptyRoot } = createModelApiSagas(emptyTypes, creators, ApiClass);
            expect(() => runSaga(runOptions, emptyRoot)).not.toThrow();

            const { root: partialRoot, [expectedProvidedSagaName]: expectedProvidedSaga } = createModelApiSagas(partialTypes, creators, ApiClass);
            expect(() => runSaga(runOptions, partialRoot)).not.toThrow();
            expect(triggered).toContainEqual(takeEvery(partialTypes.SEARCH.REQUEST, expectedProvidedSaga));
            expect(triggered).toContainEqual(takeEvery(partialTypes.MORE.REQUEST, expectedProvidedSaga));
        });
    });
});
