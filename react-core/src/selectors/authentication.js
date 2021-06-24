import { createSelector } from 'reselect';

export const DEFAULT_AUTHENTICATION_STATE_KEY = 'authentication';
export const DEFAULT_AUTHENTICATION_TOKEN_FIELD = 'token';
export const DEFAULT_AUTHENTICATION_HEADER_KEY = 'Authorization';
export const DEFAULT_AUTHENTICATION_HEADER_PREFIX = 'Bearer ';
export const DEFAULT_AUTHENTICATION_HEADER_SUFFIX = '';

export const createAuthenticationSelector = (stateKey = DEFAULT_AUTHENTICATION_STATE_KEY) => ({ [stateKey]: authentication } = {}) => authentication;

export const createAuthenticationTokenSelector = ({
    stateKey = DEFAULT_AUTHENTICATION_STATE_KEY,
    tokenField = DEFAULT_AUTHENTICATION_TOKEN_FIELD,
} = {}) => createSelector(
    createAuthenticationSelector(stateKey),
    ({ [tokenField]: token } = {}) => token,
);

export const createAuthorizationHeaderSelector = ({
    stateKey = DEFAULT_AUTHENTICATION_STATE_KEY,
    tokenField = DEFAULT_AUTHENTICATION_TOKEN_FIELD,
    headerKey = DEFAULT_AUTHENTICATION_HEADER_KEY,
    headerPrefix = DEFAULT_AUTHENTICATION_HEADER_PREFIX,
    headerSuffix = DEFAULT_AUTHENTICATION_HEADER_SUFFIX,
} = {}) => createSelector(
    createAuthenticationTokenSelector({ stateKey, tokenField }),
    token => (token ? { [headerKey]: `${headerPrefix}${token}${headerSuffix}` } : null),
);

export const getDefaultAuthentication = createAuthenticationSelector();

export const getDefaultAuthenticationToken = createAuthenticationTokenSelector();

export const getDefaultAuthorizationHeader = createAuthorizationHeaderSelector();
