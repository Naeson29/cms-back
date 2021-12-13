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

export class UserApi extends createModelApiClass(BearerApi, '/users') {
    getMe = () => this.get({ url: '/me' });

    revoke = () => this.post({ url: '/revoke' });
}

export class PublicationApi extends createModelApiClass(BearerApi, '/publications') {}
