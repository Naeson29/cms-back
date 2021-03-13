import { DEFAULT_MODEL_REDUCER_FUNCTIONS, createModelReducer } from './model';

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

const functions = {
    searchRequest: jest.fn(),
    searchSuccess: jest.fn(),
    searchFailure: jest.fn(),
    moreRequest: jest.fn(),
    moreSuccess: jest.fn(),
    moreFailure: jest.fn(),
    createRequest: jest.fn(),
    createSuccess: jest.fn(),
    createFailure: jest.fn(),
    readRequest: jest.fn(),
    readSuccess: jest.fn(),
    readFailure: jest.fn(),
    updateRequest: jest.fn(),
    updateSuccess: jest.fn(),
    updateFailure: jest.fn(),
    destroyRequest: jest.fn(),
    destroySuccess: jest.fn(),
    destroyFailure: jest.fn(),
};

const expectFunctionCallOnActionType = (fn, type) => () => {
    const initialState = 'initialState';
    const expectedState = 'expectedState';
    const modelReducer = createModelReducer(initialState, types, functions);

    functions[fn].mockImplementation(() => expectedState);
    expect(modelReducer({}, { type })).toBe(expectedState);
    expect(functions[fn]).toBeCalled();
};

describe('DEFAULT_MODEL_REDUCER_FUNCTIONS', () => {
    it('is provided', () => {
        expect(DEFAULT_MODEL_REDUCER_FUNCTIONS).toBeDefined();
    });

    it('is an dictionnary of functions', () => {
        expect(DEFAULT_MODEL_REDUCER_FUNCTIONS).toMatchObject({
            searchRequest: expect.any(Function),
            searchSuccess: expect.any(Function),
            searchFailure: expect.any(Function),
            moreRequest: expect.any(Function),
            moreSuccess: expect.any(Function),
            moreFailure: expect.any(Function),
            createRequest: expect.any(Function),
            createSuccess: expect.any(Function),
            createFailure: expect.any(Function),
            readRequest: expect.any(Function),
            readSuccess: expect.any(Function),
            readFailure: expect.any(Function),
            updateRequest: expect.any(Function),
            updateSuccess: expect.any(Function),
            updateFailure: expect.any(Function),
            destroyRequest: expect.any(Function),
            destroySuccess: expect.any(Function),
            destroyFailure: expect.any(Function),
        });
    });
});

describe('createModelReducer', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('is provided', () => {
        expect(createModelReducer).toBeDefined();
    });

    it('is a function', () => {
        expect(createModelReducer).toBeInstanceOf(Function);
    });

    it('returns a function (a.k.a ModelReducer)', () => {
        expect(createModelReducer('state', types)).toBeInstanceOf(Function);
    });

    it('allows to pass custom functions (defaults are DEFAULT_MODEL_REDUCER_FUNCTIONS))', () => {
        const modelReducer = createModelReducer('initialState', types, functions);
        const expectedState = 'spec';

        expect(modelReducer).toBeInstanceOf(Function);
        functions.searchRequest.mockImplementation(() => expectedState);
        expect(modelReducer('state', { type: types.SEARCH.REQUEST })).toBe(expectedState);
        expect(functions.searchRequest).toBeCalled();

        functions.moreRequest.mockImplementation(() => expectedState);
        expect(modelReducer('state', { type: types.MORE.REQUEST })).toBe(expectedState);
        expect(functions.moreRequest).toBeCalled();
    });

    it('allows to fully omit the types (resulting in a dummy reducer behavior))', () => {
        const initialState = 'initialState';
        const state = 'state';
        const modelReducer = createModelReducer(initialState);

        expect(modelReducer).toBeInstanceOf(Function);
        expect(modelReducer(state)).toBe(state);
        expect(modelReducer()).toBe(initialState);
    });

    it('allows to partially omit the types (resulting in a partially dummy / partially smart reducer behavior))', () => {
        const initialState = 'initialState';
        const state = 'state';
        const expectedState = 'spec';
        const modelReducer = createModelReducer(initialState, { SEARCH: types.SEARCH, MORE: types.MORE }, functions);

        expect(modelReducer).toBeInstanceOf(Function);
        expect(modelReducer(state)).toBe(state);
        expect(modelReducer()).toBe(initialState);

        functions.searchRequest.mockImplementation(() => expectedState);
        expect(modelReducer(state, { type: types.SEARCH.REQUEST })).toBe(expectedState);
        expect(functions.searchRequest).toBeCalled();

        functions.moreRequest.mockImplementation(() => expectedState);
        expect(modelReducer(state, { type: types.MORE.REQUEST })).toBe(expectedState);
        expect(functions.searchRequest).toBeCalled();

        expect(modelReducer(state, { type: types.CREATE.REQUEST })).toBe(state);
        expect(functions.createRequest).not.toBeCalled();
    });

    it('allows to omit the initialState (defaulting to {}))', () => {
        const modelReducer = createModelReducer();
        const state = 'state';

        expect(modelReducer).toBeInstanceOf(Function);
        expect(modelReducer(state)).toBe(state);
        expect(modelReducer()).toStrictEqual({});
    });
});

describe('ModelReducer', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('is a function', () => {
        const modelReducer = createModelReducer();
        expect(modelReducer).toBeInstanceOf(Function);
    });

    it('returns the state if called without action', () => {
        const state = 'state';
        const modelReducer = createModelReducer();
        expect(modelReducer(state)).toBe(state);
    });

    it('returns the initialState if called without state', () => {
        const initialState = 'initialState';
        const modelReducer = createModelReducer(initialState);
        expect(modelReducer()).toBe(initialState);
    });

    it('calls the searchRequest function on SEARCH.REQUEST action', expectFunctionCallOnActionType('searchRequest', types.SEARCH.REQUEST));
    it('calls the searchSuccess function on SEARCH.SUCCESS action', expectFunctionCallOnActionType('searchSuccess', types.SEARCH.SUCCESS));
    it('calls the searchFailure function on SEARCH.FAILURE action', expectFunctionCallOnActionType('searchFailure', types.SEARCH.FAILURE));

    it('calls the searchRequest function on MORE.REQUEST action', expectFunctionCallOnActionType('moreRequest', types.MORE.REQUEST));
    it('calls the searchSuccess function on MORE.SUCCESS action', expectFunctionCallOnActionType('moreSuccess', types.MORE.SUCCESS));
    it('calls the searchFailure function on MORE.FAILURE action', expectFunctionCallOnActionType('moreFailure', types.MORE.FAILURE));

    it('calls the createRequest function on CREATE.REQUEST action', expectFunctionCallOnActionType('createRequest', types.CREATE.REQUEST));
    it('calls the createSuccess function on CREATE.SUCCESS action', expectFunctionCallOnActionType('createSuccess', types.CREATE.SUCCESS));
    it('calls the createFailure function on CREATE.FAILURE action', expectFunctionCallOnActionType('createFailure', types.CREATE.FAILURE));

    it('calls the readRequest function on READ.REQUEST action', expectFunctionCallOnActionType('readRequest', types.READ.REQUEST));
    it('calls the readSuccess function on READ.SUCCESS action', expectFunctionCallOnActionType('readSuccess', types.READ.SUCCESS));
    it('calls the readFailure function on READ.FAILURE action', expectFunctionCallOnActionType('readFailure', types.READ.FAILURE));

    it('calls the updateRequest function on UPDATE.REQUEST action', expectFunctionCallOnActionType('updateRequest', types.UPDATE.REQUEST));
    it('calls the updateSuccess function on UPDATE.SUCCESS action', expectFunctionCallOnActionType('updateSuccess', types.UPDATE.SUCCESS));
    it('calls the updateFailure function on UPDATE.FAILURE action', expectFunctionCallOnActionType('updateFailure', types.UPDATE.FAILURE));

    it('calls the destroyRequest function on DESTROY.REQUEST action', expectFunctionCallOnActionType('destroyRequest', types.DESTROY.REQUEST));
    it('calls the destroySuccess function on DESTROY.SUCCESS action', expectFunctionCallOnActionType('destroySuccess', types.DESTROY.SUCCESS));
    it('calls the destroyFailure function on DESTROY.FAILURE action', expectFunctionCallOnActionType('destroyFailure', types.DESTROY.FAILURE));
});
