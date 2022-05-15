import _ from 'lodash';
import {
    createDefaultHttpActionTypes,
    createDefaultModelActionTypes,
    createDefaultModelActionCreators,
    createActionTypes,
} from '../../react-core';

const createDefaultHttpCreators = types => Object.keys(types).reduce((o, key) => ({
    ...o,
    [_.camelCase(key.toLowerCase())]: {
        request: payload => ({
            type: types[key].REQUEST,
            payload,
        }),
        success: payload => ({
            type: types[key].SUCCESS,
            payload,
        }),
        failure: payload => ({
            type: types[key].FAILURE,
            payload,
        }),
    },
}), {});

const createDefaultSimpleCreators = types => Object.keys(types).reduce((o, key) => ({
    ...o,
    [_.camelCase(key.toLowerCase())]: {
        do: payload => ({
            type: types[key].DO,
            payload,
        }),
    },
}), {});

export const authentication = () => {
    const types = {
        LOGIN: createDefaultHttpActionTypes('authentication', 'LOGIN'),
        LOGOUT: createDefaultHttpActionTypes('authentication', 'LOGOUT'),
    };
    const creators = createDefaultHttpCreators(types);
    return {
        types,
        creators,
    };
};

export const defaultAction = (name = '') => {
    const types = createDefaultModelActionTypes(name);
    const creators = createDefaultModelActionCreators(types);

    return {
        types,
        creators,
    };
};

export const app = () => {
    const types = {
        APP: createDefaultHttpActionTypes('app', 'APP'),
    };
    const creators = createDefaultHttpCreators(types);
    return {
        types,
        creators,
    };
};

export const user = () => {
    const defaultTypes = {
        ...createDefaultModelActionTypes('user'),
    };
    const customTypes = {
        GET_ME: createDefaultHttpActionTypes('user', 'GET_ME'),
    };
    const types = {
        ...defaultTypes,
        ...customTypes,
    };
    const creators = {
        ...createDefaultModelActionCreators(defaultTypes),
        ...createDefaultHttpCreators(customTypes),
    };
    return {
        types,
        creators,
    };
};

export const toast = () => {
    const types = {
        ADD: createActionTypes('toast', 'ADD', ['DO']),
        REMOVE: createActionTypes('toast', 'REMOVE', ['DO']),
    };
    const creators = createDefaultSimpleCreators(types);
    return {
        types,
        creators,
    };
};

export const panel = () => {
    const types = {
        OPEN: createActionTypes('panel', 'OPEN', ['DO']),
        CLOSE: createActionTypes('panel', 'CLOSE', ['DO']),
    };
    const creators = createDefaultSimpleCreators(types);
    return {
        types,
        creators,
    };
};

export const navigation = () => {
    const types = {
        PUSH: createActionTypes('navigation', 'PUSH', ['DO']),
        BACK: createActionTypes('navigation', 'BACK', ['DO']),
    };
    const creators = createDefaultSimpleCreators(types);
    return {
        types,
        creators,
    };
};

export const filter = () => {
    const types = {
        OPEN: createActionTypes('filter', 'OPEN', ['DO']),
        CLOSE: createActionTypes('filter', 'CLOSE', ['DO']),
    };
    const creators = createDefaultSimpleCreators(types);
    return {
        types,
        creators,
    };
};


export const modal = () => {
    const types = {
        OPEN: createActionTypes('modal', 'OPEN', ['DO']),
        CLOSE: createActionTypes('modal', 'CLOSE', ['DO']),
    };
    const creators = createDefaultSimpleCreators(types);
    return {
        types,
        creators,
    };
};
