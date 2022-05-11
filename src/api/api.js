import {
    createHttpApiClass,
    createModelApiClass,
} from '../../react-core';

const headers = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

class AuthApi extends createHttpApiClass({
    baseURL: `${process.env.API_URL}/oauth/`,
    ...headers,
}) {}

class BearerApi extends createHttpApiClass({
    baseURL: `${process.env.API_URL}/api`,
    ...headers,
}) {}

export class AuthenticationApi extends AuthApi {
    login = params => this.post({
        url: 'token',
        data: {
            ...params,
            grant_type: 'password',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            provider: process.env.PROVIDER,
        },
    });
}

export const defaultApi = path => class Api extends createModelApiClass(BearerApi, `/${path}`) {};

export class AppApi extends defaultApi('app') {
    app = () => this.get({ url: '/app' });
}

export class UserApi extends defaultApi('user') {
    getMe = () => this.get({ url: '/me' });

    revoke = () => this.post({ url: '/revoke' });
}
