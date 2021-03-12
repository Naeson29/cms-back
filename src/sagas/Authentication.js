import { takeEvery, put, call}  from 'redux-saga/effects';
import {createHttpApiSaga, createHttpSaga} from '../../react-core';

import AuthenticationApi   from '../api/AuthenticationApi';
import UserApi   from '../api/UserApi';
import { types, creators } from '../actions/Authentication';
import { creators as navigationCreators} from '../actions/Navigation';

import AuthenticationService from "../services/AuthenticationService";

export function AuthenticationSaga() {

    const login = createHttpSaga(creators.login, AuthenticationApi.login);
    const logout = createHttpApiSaga(creators.logout, UserApi, 'revoke');

    const navigationAfterLogin = function* (){
        yield put(navigationCreators.push.do('/'));
    };

    const clear = function* (){
        yield call(() => AuthenticationService.logout());
        yield put(navigationCreators.push.do('/login'));
    };


    function* root() {

        yield takeEvery(types.LOGIN.REQUEST, login);
        yield takeEvery(types.LOGOUT.REQUEST, logout);
        yield takeEvery(types.LOGIN.SUCCESS, navigationAfterLogin);
        yield takeEvery(types.LOGOUT.SUCCESS , clear);
        yield takeEvery(types.LOGOUT.FAILURE , clear);
    }

    return {
        root
    };

}
export default AuthenticationSaga().root;
