import { createModelApiClass } from '../../../react-core';
import Base from '../Base';

export default class userApi extends createModelApiClass(Base, '/users') {
    getMe = () => this.get({ url: '/me' });

    revoke = () => this.post({ url: '/revoke' });
}
