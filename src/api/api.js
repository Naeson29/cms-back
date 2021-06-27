import {
    createHttpApiClass,
    createModelApiClass,
} from '../../react-core';

const headers = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
}

class authApi extends createHttpApiClass({
    baseURL: `${process.env.API_URL}/oauth/`,
    ...headers
}) {}

class bearerApi extends createHttpApiClass({
    baseURL: `${process.env.API_URL}/api`,
    ...headers
}) {}

export class authenticationApi extends authApi {
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

export class userApi extends createModelApiClass(bearerApi, '/users') {
    getMe = () => this.get({ url: '/me' });
    revoke = () => this.post({ url: '/revoke' });
}