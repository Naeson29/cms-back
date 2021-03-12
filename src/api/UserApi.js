import { createModelApiClass } from '../../react-core'
import Base from './Base'

export default class userApi extends createModelApiClass(Base, '/') {

    getMe = () => {
        return this.get({url : `${this.path}me`});
    };

    revoke = () => {
        return this.post({url :`${this.path}revoke`});
    };

    search = (params) => {
        return this.get({url :`${this.path}users`, params});
    }

    destroy = (params) => {
        return this.delete({url :`${this.path}users/${params.id}`});
    }
}
