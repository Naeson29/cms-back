import { createDefaultHttpActionTypes } from '../../../react-core';

const types = {
    LOGIN: createDefaultHttpActionTypes('authentication', 'LOGIN'),
    LOGOUT: createDefaultHttpActionTypes('authentication', 'LOGOUT'),
};

const creators = {
    login: {
        request(payload) {
            return {
                type: types.LOGIN.REQUEST,
                payload,
            };
        },
        success(data) {
            return {
                type: types.LOGIN.SUCCESS,
                payload: data,
            };
        },
        failure(data) {
            return {
                type: types.LOGIN.FAILURE,
                payload: data,
            };
        },
    },
    logout: {
        request(payload) {
            return {
                type: types.LOGOUT.REQUEST,
                payload,
            };
        },
        success(data) {
            return {
                type: types.LOGOUT.SUCCESS,
                payload: data,
            };
        },
        failure(data) {
            return {
                type: types.LOGOUT.FAILURE,
                payload: data,
            };
        },
    },
};

export default {
    types,
    creators,
};
