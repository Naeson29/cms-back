import { createHttpApiClass } from '../../../react-core';

export default class AuthenticationBase extends createHttpApiClass({
    baseURL: `${process.env.API_URL}/oauth/`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
}) {}
