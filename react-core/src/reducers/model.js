import * as ModelReducerFunctions from './modelFunctions';

export const DEFAULT_MODEL_REDUCER_FUNCTIONS = ModelReducerFunctions;

export const createModelReducer = (initialState = {}, {
    SEARCH = {},
    MORE = {},
    CREATE = {},
    READ = {},
    UPDATE = {},
    DESTROY = {},
} = {}, functions = ModelReducerFunctions) => (state = initialState, action = {}) => {
    switch (action.type) {
    case undefined: return state;
    // SEARCH
    case SEARCH.REQUEST: return functions.searchRequest(state, 'index', action);
    case SEARCH.SUCCESS: return functions.searchSuccess(state, action.payload, 'index', action);
    case SEARCH.FAILURE: return functions.searchFailure(state, action.payload, 'index', action);
    // MORE
    case MORE.REQUEST: return functions.moreRequest(state, 'index');
    case MORE.SUCCESS: return functions.moreSuccess(state, action.payload, 'index', action);
    case MORE.FAILURE: return functions.moreFailure(state, action.payload, 'index', action);
    // CREATE
    case CREATE.REQUEST: return functions.createRequest(state, 'new', action);
    case CREATE.SUCCESS: return functions.createSuccess(state, action.payload, 'new', action);
    case CREATE.FAILURE: return functions.createFailure(state, action.payload, 'new', action);
    // READ
    case READ.REQUEST: return functions.readRequest(state, 'show');
    case READ.SUCCESS: return functions.readSuccess(state, action.payload, 'show');
    case READ.FAILURE: return functions.readFailure(state, action.payload, 'show');
    // UPDATE
    case UPDATE.REQUEST: return functions.updateRequest(state, 'edit', action);
    case UPDATE.SUCCESS: return functions.updateSuccess(state, action.payload, 'edit', action);
    case UPDATE.FAILURE: return functions.updateFailure(state, action.payload, 'edit', action);
    // DESTROY
    case DESTROY.REQUEST: return functions.destroyRequest(state, 'destroy', action);
    case DESTROY.SUCCESS: return functions.destroySuccess(state, action.payload, 'destroy', action);
    case DESTROY.FAILURE: return functions.destroyFailure(state, action.payload, 'destroy', action);
    // DEFAULT
    default: return state;
    }
};

export default createModelReducer;
