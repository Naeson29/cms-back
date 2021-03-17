import Base from './Base';

class AuthenticationApi extends Base {
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

export default new AuthenticationApi();