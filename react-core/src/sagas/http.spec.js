import { runSaga } from 'redux-saga';
import { DEFAULT_MAP_STATE_TO_HTTP_CONFIG, applyMapStateToHttpConfig, createHttpSaga, createHttpApiSaga } from './index';
import { getDefaultAuthorizationHeader } from '../selectors';
import { createHttpApiClass } from '../apis';

const HTTP_STATUS_PATH_SUCCESS_MAP = {
    200: { path: '5e383ba53100000f00d380af', success: true },
    201: { path: '5e38425d3100000f00d380db', success: true },
    204: { path: '5e384293310000e489d380de', success: true },
    400: { path: '5e3842bf310000e389d380df', success: false },
    401: { path: '5e3842cb310000719bd380e7', success: false },
    403: { path: '5e3842d9310000e489d380ed', success: false },
    404: { path: '5e383d27310000e489d380ba', success: false },
    406: { path: '5e3843043100008d87d380fa', success: false },
    408: { path: '5e3843163100008d87d380fb', success: false },
    410: { path: '5e38432c3100006a00d380fc', success: false },
    413: { path: '5e38433a310000d2bfd380fd', success: false },
    414: { path: '5e38434b310000d2bfd380fe', success: false },
    418: { path: '5e384380310000719bd38101', success: false },
    429: { path: '5e384391310000e389d38102', success: false },
    500: { path: '5e3843c4310000d2bfd38104', success: false },
    501: { path: '5e3843cc3100005a00d38105', success: false },
    502: { path: '5e3843d43100000f00d38106', success: false },
    503: { path: '5e3843dc310000e489d38107', success: false },
    504: { path: '5e3843e4310000e389d38108', success: false },
};

const REQUEST_TIMEOUT = 500;

const statusCodeShouldShouldMatchSuccess = (statusApiConfiguration, creators, statusCode) => async () => {
    const statusApiInstance = new (createHttpApiClass(statusApiConfiguration))();

    const { [statusCode]: { path, success } } = HTTP_STATUS_PATH_SUCCESS_MAP;

    // @TODO Test for POST, PUT, PATCH & DELETE ?
    const successSpy = jest.spyOn(creators, 'success');
    const failureSpy = jest.spyOn(creators, 'failure');
    const saga = createHttpSaga(creators, statusApiInstance.get.bind(statusApiInstance));

    await runSaga({
        dispatch: () => null,
        getState: () => {},
    }, saga, creators.request({ url: `/${path}` }));

    await new Promise(resolve => setTimeout(resolve, REQUEST_TIMEOUT));

    if (success) {
        expect(failureSpy).not.toBeCalled();
        expect(successSpy).toBeCalled();
    } else {
        expect(failureSpy).toBeCalled();
        expect(successSpy).not.toBeCalled();
    }

    successSpy.mockRestore();
    failureSpy.mockRestore();
};

describe('DEFAULT_MAP_STATE_TO_HTTP_CONFIG', () => {
    it('is provided', () => {
        expect(DEFAULT_MAP_STATE_TO_HTTP_CONFIG).toBeDefined();
    });

    it('is an object', () => {
        expect(DEFAULT_MAP_STATE_TO_HTTP_CONFIG).toBeInstanceOf(Object);
    });
});

describe('applyMapStateToHttpConfig', () => {
    it('is provided', () => {
        expect(applyMapStateToHttpConfig).toBeDefined();
    });

    it('is an function', () => {
        expect(applyMapStateToHttpConfig).toBeInstanceOf(Function);
    });

    it('returns a function reducing a state selectors structure into an object when applied on a state', () => {
        expect(applyMapStateToHttpConfig()).toBeInstanceOf(Function);

        const A = 'A';
        const B = 'B';
        const C = 'C';

        const state = {
            a: A,
            b: B,
            c: C,
        };

        const getA = ({ a }) => a;
        const getB = ({ b }) => b;
        const getC = ({ c }) => c;

        const selectors = {
            selectedA: getA,
            children: {
                selectedB: getB,
                children: { selectedC: getC },
            },
        };

        const expectedObject = {
            selectedA: A,
            children: {
                selectedB: B,
                children: { selectedC: C },
            },
        };

        expect(applyMapStateToHttpConfig(selectors)(state)).toEqual(expectedObject);
    });
});

describe('createHttpSaga', () => {
    const types = {
        REQUEST: 'spec/NAME_REQUEST',
        SUCCESS: 'spec/NAME_SUCCESS',
        FAILURE: 'spec/NAME_FAILURE',
    };

    const creators = {
        request: args => ({
            type: types.REQUEST,
            payload: args,
        }),
        success: args => ({
            type: types.SUCCESS,
            payload: args,
        }),
        failure: args => ({
            type: types.FAILURE,
            payload: args,
        }),
    };

    const api = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('is provided', () => {
        expect(createHttpSaga).toBeDefined();
    });

    it('is a function', () => {
        expect(createHttpSaga).toBeInstanceOf(Function);
    });

    it('allows to disable the options injection', async () => {
        const saga = createHttpSaga(creators, api, null);
        const state = { Authentication: { token: 'spec' } };
        const payload = { spec: 'spec' };

        await runSaga({
            dispatch: () => null,
            getState: () => state,
        }, saga, creators.request(payload));

        expect(api).toBeCalledWith(payload);
    });
});

describe('HttpSaga (createHttpSaga return value)', () => {
    const types = {
        REQUEST: 'spec/NAME_REQUEST',
        SUCCESS: 'spec/NAME_SUCCESS',
        FAILURE: 'spec/NAME_FAILURE',
    };

    const creators = {
        request: args => ({
            type: types.REQUEST,
            payload: args,
        }),
        success: args => ({
            type: types.SUCCESS,
            payload: args,
        }),
        failure: args => ({
            type: types.FAILURE,
            payload: args,
        }),
    };

    const api = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('is a generator', () => {
        const saga = createHttpSaga();

        expect(saga.constructor).toBe((function* generator() { yield undefined; }).constructor);
    });

    it('allows to be run without parameter or with an action without payload as parameter', async () => {
        api.mockImplementation(() => ({ data: {} }));
        const saga = createHttpSaga(creators, api, null);

        await runSaga({
            dispatch: () => null,
            getState: () => {},
        }, saga);

        expect(api).toBeCalledWith({});
    });

    it('calls the provided API on first yield (usually on REQUEST action) with payload as parameter', async () => {
        api.mockImplementation(() => ({ data: {} }));
        const saga = createHttpSaga(creators, api, null);
        const initialActionPayload = { spec: 'spec' };

        await runSaga({
            dispatch: () => null,
            getState: () => {},
        }, saga, creators.request(initialActionPayload));

        expect(api).toBeCalledWith(initialActionPayload);
    });

    it('dispatches a SUCCESS action (carrying the data value) on API response without error', async () => {
        const dataValue = {};
        api.mockImplementation(() => ({ data: dataValue }));
        const saga = createHttpSaga(creators, api);
        const dispatched = [];

        await runSaga({
            dispatch: action => dispatched.push(action),
            getState: () => ({}),
        }, saga, creators.request());

        expect(dispatched).toContainEqual(creators.success(dataValue));
    });

    it('injects the HTTP options provided via mapStateToHttpConfig', async () => {
        const customHeaders = { CustomAuthorization: 'Basic spec' };
        const customHeadersSelector = () => customHeaders;
        const saga = createHttpSaga(creators, api, { headers: customHeadersSelector });
        const state = { Authentication: { token: 'spec' } };

        await runSaga({
            dispatch: () => null,
            getState: () => state,
        }, saga, creators.request());

        expect(api).toBeCalledWith({ headers: customHeaders });
    });

    it('injects the Authorization header as default options', async () => {
        const saga = createHttpSaga(creators, api);
        const state = { Authentication: { token: 'spec' } };
        const expectedHeader = getDefaultAuthorizationHeader(state);

        await runSaga({
            dispatch: () => null,
            getState: () => state,
        }, saga, creators.request());

        expect(api).toBeCalledWith({ headers: expectedHeader });
    });

    it('merges the injected options with the others provided options', async () => {
        const saga = createHttpSaga(creators, api);
        const state = { Authentication: { token: 'spec' } };

        const headersToKeep = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        const expectedHeader = {
            ...getDefaultAuthorizationHeader(state),
            ...headersToKeep,
        };

        await runSaga({
            dispatch: () => null,
            getState: () => state,
        }, saga, creators.request({ headers: headersToKeep }));

        expect(api).toBeCalledWith({ headers: expectedHeader });
    });

    it('allows the Authorization header to be overwritten', async () => {
        const saga = createHttpSaga(creators, api);
        const state = { Authentication: { token: 'spec' } };
        const headerToKeep = { Authorization: 'overrride' };
        const expectedHeader = headerToKeep;

        await runSaga({
            dispatch: () => null,
            getState: () => state,
        }, saga, creators.request({ headers: headerToKeep }));

        expect(api).toBeCalledWith({ headers: expectedHeader });
    });

    describe('Response status code handling', () => {
        const statusApiConfiguration = { baseURL: 'http://www.mocky.io/v2' };

        Object.keys(HTTP_STATUS_PATH_SUCCESS_MAP).forEach((statusCode) => {
            const { [statusCode]: { success } } = HTTP_STATUS_PATH_SUCCESS_MAP;
            it(`treats ${statusCode} as a ${success ? 'success' : 'failure'}`,
                statusCodeShouldShouldMatchSuccess(statusApiConfiguration, creators, statusCode));
        });
    });
});

describe('createHttpApiSaga', () => {
    const types = {
        REQUEST: 'spec/NAME_REQUEST',
        SUCCESS: 'spec/NAME_SUCCESS',
        FAILURE: 'spec/NAME_FAILURE',
    };

    const creators = {
        request: args => ({
            type: types.REQUEST,
            payload: args,
        }),
        success: args => ({
            type: types.SUCCESS,
            payload: args,
        }),
        failure: args => ({
            type: types.FAILURE,
            payload: args,
        }),
    };

    const apiMethod = jest.fn();

    class ApiClass extends createHttpApiClass({}) {
        apiMethod = apiMethod
    }

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('is provided', () => {
        expect(createHttpApiSaga).toBeDefined();
    });

    it('is a function', () => {
        expect(createHttpApiSaga).toBeInstanceOf(Function);
    });

    it('allows to disable the options injection', async () => {
        const saga = createHttpApiSaga(creators, ApiClass, 'apiMethod', null, null);
        const state = { Authentication: { token: 'spec' } };
        const payload = { spec: 'spec' };

        await runSaga({
            dispatch: () => null,
            getState: () => state,
        }, saga, creators.request(payload));

        expect(apiMethod).toBeCalledWith(payload);
    });
});

describe('HttpApiSaga (createHttpApiSaga return value)', () => {
    const types = {
        REQUEST: 'spec/NAME_REQUEST',
        SUCCESS: 'spec/NAME_SUCCESS',
        FAILURE: 'spec/NAME_FAILURE',
    };

    const creators = {
        request: args => ({
            type: types.REQUEST,
            payload: args,
        }),
        success: args => ({
            type: types.SUCCESS,
            payload: args,
        }),
        failure: args => ({
            type: types.FAILURE,
            payload: args,
        }),
    };

    const apiMethod = jest.fn();

    class ApiClass extends createHttpApiClass({}) {
        apiMethod = apiMethod
    }

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('is a generator', () => {
        const saga = createHttpApiSaga();

        expect(saga.constructor).toBe((function* generator() { yield undefined; }).constructor);
    });

    it('allows to be run without parameter or with an action without payload as parameter', async () => {
        apiMethod.mockImplementation(() => ({ data: {} }));
        const saga = createHttpApiSaga(creators, ApiClass, 'apiMethod', null);

        await runSaga({
            dispatch: () => null,
            getState: () => {},
        }, saga);

        expect(apiMethod).toBeCalledWith({});
    });

    it('calls the provided API on first yield (usually on REQUEST action) with payload as parameter', async () => {
        apiMethod.mockImplementation(() => ({ data: {} }));
        const saga = createHttpApiSaga(creators, ApiClass, 'apiMethod');
        const initialActionPayload = { spec: 'spec' };

        await runSaga({
            dispatch: () => null,
            getState: () => {},
        }, saga, creators.request(initialActionPayload));

        expect(apiMethod).toBeCalledWith(initialActionPayload);
    });

    it('dispatches a SUCCESS action (carrying the data value) on API response without error', async () => {
        const dataValue = {};
        apiMethod.mockImplementation(() => ({ data: dataValue }));
        const saga = createHttpApiSaga(creators, ApiClass, 'apiMethod');
        const dispatched = [];

        await runSaga({
            dispatch: action => dispatched.push(action),
            getState: () => ({}),
        }, saga, creators.request());

        expect(dispatched).toContainEqual(creators.success(dataValue));
    });

    it('injects the HTTP options provided via mapStateToHttpMethodConfig', async () => {
        const saga = createHttpApiSaga(creators, ApiClass, 'apiMethod', undefined, { headers: getDefaultAuthorizationHeader });
        const state = { Authentication: { token: 'spec' } };
        const expectedHeader = getDefaultAuthorizationHeader(state);

        await runSaga({
            dispatch: () => null,
            getState: () => state,
        }, saga, creators.request());

        expect(apiMethod).toBeCalledWith({ headers: expectedHeader });
    });

    it('merges the injected options with the others provided options', async () => {
        const saga = createHttpApiSaga(creators, ApiClass, 'apiMethod', undefined, {
            params: () => ({ filters: ['spec1'] }),
            headers: getDefaultAuthorizationHeader,
        });
        const state = { Authentication: { token: 'spec' } };

        const headersToKeep = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        const expectedHeader = {
            ...getDefaultAuthorizationHeader(state),
            ...headersToKeep,
        };

        await runSaga({
            dispatch: () => null,
            getState: () => state,
        }, saga, creators.request({ params: { filters: ['spec2'] }, headers: headersToKeep }));

        expect(apiMethod).toBeCalledWith({ params: { filters: ['spec1', 'spec2'] }, headers: expectedHeader });
    });

    it('allows to override the injected options via action payload', async () => {
        const saga = createHttpApiSaga(creators, ApiClass, 'apiMethod');
        const state = { Authentication: { token: 'spec' } };
        const headerToKeep = { Authorization: 'overrride' };
        const expectedHeader = headerToKeep;

        await runSaga({
            dispatch: () => null,
            getState: () => state,
        }, saga, creators.request({ headers: headerToKeep }));

        expect(apiMethod).toBeCalledWith({ headers: expectedHeader });
    });

    // @TODO unit test mapStateToHttpApiConfig

    // @TODO unit test relay to httpSaga
});
