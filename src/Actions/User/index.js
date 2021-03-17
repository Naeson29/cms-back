import {
    createDefaultModelActionTypes, createDefaultModelActionCreators, createDefaultHttpActionTypes,
} from '../../../react-core';

export const types = {
    ...createDefaultModelActionTypes('user'),
    GET_ME: createDefaultHttpActionTypes('user', 'GET_ME'),
};

export const creators = {
    ...createDefaultModelActionCreators(types),
    getMe: {
        request: payload => ({
            type: types.GET_ME.REQUEST,
            payload,
        }),
        success: payload => ({
            type: types.GET_ME.SUCCESS,
            payload,
        }),
        failure: payload => ({
            type: types.GET_ME.FAILURE,
            payload,
        }),
    },
};
