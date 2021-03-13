import { createModelApiClass } from '../../react-core';
import Base from './Base';

export default class userApi extends createModelApiClass(Base, '/') {
    getMe = () => this.get({ url: `${this.path}me` });

    revoke = () => this.post({ url: `${this.path}revoke` });

    search = params => this.get({
        url: `${this.path}users`, params,
    })

    destroy = params => this.delete({ url: `${this.path}users/${params.id}` })
}
