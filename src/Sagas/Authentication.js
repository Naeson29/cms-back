import {
    takeEvery, put, call,
} from 'redux-saga/effects';
import {
    createHttpApiSaga, createHttpSaga,
} from '../../react-core';

import AuthenticationApi from '../Api/AuthenticationApi';
import UserApi from '../Api/UserApi';
import {
    types, creators,
} from '../Actions/Authentication';
import { creators as navigationCreators } from '../Actions/Navigation';
import AuthenticationService from '../Services/AuthenticationService';

const AuthenticationSaga = () => {
    const login = createHttpSaga(creators.login, AuthenticationApi.login);
    const logout = createHttpApiSaga(creators.logout, UserApi, 'revoke');

    function* navigationAfterLogin() {
        yield put(navigationCreators.push.do('/'));
    }

    function* clear() {
        yield call(() => AuthenticationService.logout());
        yield put(navigationCreators.push.do('/login'));
    }

    function* root() {
        yield takeEvery(types.LOGIN.REQUEST, login);
        yield takeEvery(types.LOGOUT.REQUEST, logout);
        yield takeEvery(types.LOGIN.SUCCESS, navigationAfterLogin);
        yield takeEvery(types.LOGOUT.SUCCESS, clear);
        yield takeEvery(types.LOGOUT.FAILURE, clear);
    }

    return {
        root,
    };
};
export default AuthenticationSaga;
