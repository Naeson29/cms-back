import {
    DEFAULT_AUTHENTICATION_STATE_KEY,
    DEFAULT_AUTHENTICATION_TOKEN_FIELD,
    DEFAULT_AUTHENTICATION_HEADER_KEY,
    DEFAULT_AUTHENTICATION_HEADER_PREFIX,
    DEFAULT_AUTHENTICATION_HEADER_SUFFIX,
    createAuthenticationSelector,
    createAuthenticationTokenSelector,
    createAuthorizationHeaderSelector,
    getDefaultAuthentication,
    getDefaultAuthenticationToken,
    getDefaultAuthorizationHeader,
} from './index';

describe('DEFAULT_AUTHENTICATION_STATE_KEY', () => {
    it('is provided', () => {
        expect(DEFAULT_AUTHENTICATION_STATE_KEY).toBeDefined();
    });

    it('is a string', () => {
        expect(typeof DEFAULT_AUTHENTICATION_STATE_KEY).toBe(typeof '');
    });
});

describe('DEFAULT_AUTHENTICATION_TOKEN_FIELD', () => {
    it('is provided', () => {
        expect(DEFAULT_AUTHENTICATION_TOKEN_FIELD).toBeDefined();
    });

    it('is a string', () => {
        expect(typeof DEFAULT_AUTHENTICATION_TOKEN_FIELD).toBe(typeof '');
    });
});

describe('DEFAULT_AUTHENTICATION_HEADER_KEY', () => {
    it('is provided', () => {
        expect(DEFAULT_AUTHENTICATION_HEADER_KEY).toBeDefined();
    });

    it('is a string', () => {
        expect(typeof DEFAULT_AUTHENTICATION_HEADER_KEY).toBe(typeof '');
    });
});

describe('DEFAULT_AUTHENTICATION_HEADER_PREFIX', () => {
    it('is provided', () => {
        expect(DEFAULT_AUTHENTICATION_HEADER_PREFIX).toBeDefined();
    });

    it('is a string', () => {
        expect(typeof DEFAULT_AUTHENTICATION_HEADER_PREFIX).toBe(typeof '');
    });
});

describe('DEFAULT_AUTHENTICATION_HEADER_SUFFIX', () => {
    it('is provided', () => {
        expect(DEFAULT_AUTHENTICATION_HEADER_SUFFIX).toBeDefined();
    });

    it('is a string', () => {
        expect(typeof DEFAULT_AUTHENTICATION_HEADER_SUFFIX).toBe(typeof '');
    });
});

describe('createAuthenticationSelector', () => {
    it('is provided', () => {
        expect(createAuthenticationSelector).toBeDefined();
    });

    it('is a function', () => {
        expect(createAuthenticationSelector).toBeInstanceOf(Function);
    });

    it('returns the provided stateKey substate', () => {
        const stateKey = 'stateKey';
        const value = 'spec';
        const state = { [stateKey]: value };

        const selector = createAuthenticationSelector('stateKey');

        expect(selector(state)).toBe(value);
    });

    it('allows to omit the stateKey parameter to use the DEFAULT_AUTHENTICATION_STATE_KEY', () => {
        const value = 'spec';
        const state = { [DEFAULT_AUTHENTICATION_STATE_KEY]: value };

        const selector = createAuthenticationSelector();

        expect(selector(state)).toBe(value);
    });
});

describe('createAuthenticationTokenSelector', () => {
    it('is provided', () => {
        expect(createAuthenticationTokenSelector).toBeDefined();
    });

    it('is a function', () => {
        expect(createAuthenticationTokenSelector).toBeInstanceOf(Function);
    });

    it('returns the provided stateKey.tokenField value (a.k.a "token")', () => {
        const stateKey = 'stateKey';
        const tokenField = 'tokenField';
        const value = 'spec';
        const state = { [stateKey]: { [tokenField]: value } };

        const selector = createAuthenticationTokenSelector({ stateKey, tokenField });

        expect(selector(state)).toBe(value);
    });

    it('allows to omit the stateKey parameter to use the DEFAULT_AUTHENTICATION_STATE_KEY', () => {
        const tokenField = 'tokenField';
        const value = 'spec';
        const state = { [DEFAULT_AUTHENTICATION_STATE_KEY]: { [tokenField]: value } };

        const selector = createAuthenticationTokenSelector({ tokenField });

        expect(selector(state)).toBe(value);
    });

    it('allows to omit the tokenField parameter to use the DEFAULT_AUTHENTICATION_TOKEN_FIELD', () => {
        const stateKey = 'stateKey';
        const value = 'spec';
        const state = { [stateKey]: { [DEFAULT_AUTHENTICATION_TOKEN_FIELD]: value } };

        const selector = createAuthenticationTokenSelector({ stateKey });

        expect(selector(state)).toBe(value);
    });
});

describe('createAuthorizationHeaderSelector', () => {
    it('is provided', () => {
        expect(createAuthorizationHeaderSelector).toBeDefined();
    });

    it('is a function', () => {
        expect(createAuthorizationHeaderSelector).toBeInstanceOf(Function);
    });

    it('returns a formated Authorization header with the provided stateKey.tokenField value (a.k.a "token")', () => {
        const stateKey = 'stateKey';
        const tokenField = 'tokenField';
        const value = 'spec';
        const state = { [stateKey]: { [tokenField]: value } };

        const headerKey = 'Header';
        const headerPrefix = 'PREFIX_';
        const headerSuffix = '_SUFFIX';
        const expectedHeader = { [headerKey]: `${headerPrefix}${value}${headerSuffix}` };

        const selector = createAuthorizationHeaderSelector({ stateKey, tokenField, headerKey, headerPrefix, headerSuffix });

        expect(selector(state)).toStrictEqual(expectedHeader);
    });

    it('returns null if the provided stateKey.tokenField value (a.k.a "token") is not defined', () => {
        const stateKey = 'stateKey';
        const tokenField = 'tokenField';
        const headerKey = 'Header';
        const headerPrefix = 'PREFIX_';
        const headerSuffix = '_SUFFIX';

        const selector = createAuthorizationHeaderSelector({ stateKey, tokenField, headerKey, headerPrefix, headerSuffix });

        expect(selector({ [stateKey]: { [tokenField]: undefined } })).toBe(null);
        expect(selector({ [stateKey]: undefined })).toBe(null);
        expect(selector({ })).toBe(null);
        expect(selector()).toBe(null);
    });

    it('allows to omit the stateKey parameter to use the DEFAULT_AUTHENTICATION_STATE_KEY', () => {
        const tokenField = 'tokenField';
        const value = 'spec';
        const state = { [DEFAULT_AUTHENTICATION_STATE_KEY]: { [tokenField]: value } };

        const headerKey = 'Header';
        const headerPrefix = 'PREFIX_';
        const headerSuffix = '_SUFFIX';
        const expectedHeader = { [headerKey]: `${headerPrefix}${value}${headerSuffix}` };

        const selector = createAuthorizationHeaderSelector({ tokenField, headerKey, headerPrefix, headerSuffix });

        expect(selector(state)).toStrictEqual(expectedHeader);
    });

    it('allows to omit the tokenField parameter to use the DEFAULT_AUTHENTICATION_TOKEN_FIELD', () => {
        const stateKey = 'stateKey';
        const value = 'spec';
        const state = { [stateKey]: { [DEFAULT_AUTHENTICATION_TOKEN_FIELD]: value } };

        const headerKey = 'Header';
        const headerPrefix = 'PREFIX_';
        const headerSuffix = '_SUFFIX';
        const expectedHeader = { [headerKey]: `${headerPrefix}${value}${headerSuffix}` };

        const selector = createAuthorizationHeaderSelector({ stateKey, headerKey, headerPrefix, headerSuffix });

        expect(selector(state)).toStrictEqual(expectedHeader);
    });

    it('allows to omit the headerKey parameter to use the DEFAULT_AUTHENTICATION_HEADER_KEY', () => {
        const stateKey = 'stateKey';
        const tokenField = 'tokenField';
        const value = 'spec';
        const state = { [stateKey]: { [tokenField]: value } };

        const headerPrefix = 'PREFIX_';
        const headerSuffix = '_SUFFIX';
        const expectedHeader = { [DEFAULT_AUTHENTICATION_HEADER_KEY]: `${headerPrefix}${value}${headerSuffix}` };

        const selector = createAuthorizationHeaderSelector({ stateKey, tokenField, headerPrefix, headerSuffix });

        expect(selector(state)).toStrictEqual(expectedHeader);
    });

    it('allows to omit the headerPrefix parameter to use the DEFAULT_AUTHENTICATION_HEADER_PREFIX', () => {
        const stateKey = 'stateKey';
        const tokenField = 'tokenField';
        const value = 'spec';
        const state = { [stateKey]: { [tokenField]: value } };

        const headerKey = 'Header';
        const headerSuffix = '_SUFFIX';
        const expectedHeader = { [headerKey]: `${DEFAULT_AUTHENTICATION_HEADER_PREFIX}${value}${headerSuffix}` };

        const selector = createAuthorizationHeaderSelector({ stateKey, tokenField, headerKey, headerSuffix });

        expect(selector(state)).toStrictEqual(expectedHeader);
    });

    it('allows to omit the headerSuffix parameter to use the DEFAULT_AUTHENTICATION_HEADER_SUFFIX', () => {
        const stateKey = 'stateKey';
        const tokenField = 'tokenField';
        const value = 'spec';
        const state = { [stateKey]: { [tokenField]: value } };

        const headerKey = 'Header';
        const headerPrefix = 'PREFIX_';
        const expectedHeader = { [headerKey]: `${headerPrefix}${value}${DEFAULT_AUTHENTICATION_HEADER_SUFFIX}` };

        const selector = createAuthorizationHeaderSelector({ stateKey, tokenField, headerKey, headerPrefix });

        expect(selector(state)).toStrictEqual(expectedHeader);
    });
});

describe('getDefaultAuthentication', () => {
    it('is provided', () => {
        expect(getDefaultAuthentication).toBeDefined();
    });

    it('is a function', () => {
        expect(getDefaultAuthentication).toBeInstanceOf(Function);
    });

    it('is equivalent to the result of createAuthenticationSelector with the default parameters', () => {
        const value = 'spec';
        const state = { [DEFAULT_AUTHENTICATION_STATE_KEY]: value };

        const selector = createAuthenticationSelector(DEFAULT_AUTHENTICATION_STATE_KEY);

        expect(getDefaultAuthentication(state)).toBe(value);
        expect(selector(state)).toBe(value);
        expect(getDefaultAuthentication(state)).toBe(selector(state));
    });
});

describe('getDefaultAuthenticationToken', () => {
    it('is provided', () => {
        expect(getDefaultAuthenticationToken).toBeDefined();
    });

    it('is a function', () => {
        expect(getDefaultAuthenticationToken).toBeInstanceOf(Function);
    });

    it('is equivalent to the result of createAuthenticationTokenSelector with the default parameters', () => {
        const value = 'spec';
        const state = { [DEFAULT_AUTHENTICATION_STATE_KEY]: { [DEFAULT_AUTHENTICATION_TOKEN_FIELD]: value } };

        const selector = createAuthenticationTokenSelector({
            stateKey: DEFAULT_AUTHENTICATION_STATE_KEY,
            tokenField: DEFAULT_AUTHENTICATION_TOKEN_FIELD,
        });

        expect(getDefaultAuthenticationToken(state)).toBe(value);
        expect(selector(state)).toBe(value);
        expect(getDefaultAuthenticationToken(state)).toBe(selector(state));
    });
});

describe('getDefaultAuthorizationHeader', () => {
    it('is provided', () => {
        expect(getDefaultAuthorizationHeader).toBeDefined();
    });

    it('is a function', () => {
        expect(getDefaultAuthorizationHeader).toBeInstanceOf(Function);
    });

    it('is equivalent to the result of createAuthorizationHeaderSelector with the default parameters', () => {
        const value = 'spec';
        const state = { [DEFAULT_AUTHENTICATION_STATE_KEY]: { [DEFAULT_AUTHENTICATION_TOKEN_FIELD]: value } };
        const expectedHeader = {
            [DEFAULT_AUTHENTICATION_HEADER_KEY]:
                `${DEFAULT_AUTHENTICATION_HEADER_PREFIX}${value}${DEFAULT_AUTHENTICATION_HEADER_SUFFIX}`,
        };

        const selector = createAuthorizationHeaderSelector({
            stateKey: DEFAULT_AUTHENTICATION_STATE_KEY,
            tokenField: DEFAULT_AUTHENTICATION_TOKEN_FIELD,
            headerKey: DEFAULT_AUTHENTICATION_HEADER_KEY,
            headerPrefix: DEFAULT_AUTHENTICATION_HEADER_PREFIX,
            headerSuffix: DEFAULT_AUTHENTICATION_HEADER_SUFFIX,
        });

        expect(getDefaultAuthorizationHeader(state)).toStrictEqual(expectedHeader);
        expect(selector(state)).toStrictEqual(expectedHeader);
        expect(getDefaultAuthorizationHeader(state)).toStrictEqual(selector(state));
    });
});
