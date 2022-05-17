import {
    takeEvery, put, call,
} from 'redux-saga/effects';
import {
    createHttpApiSaga, createHttpSaga, createModelApiSagas,
} from '../../react-core';
import {
    appActions,
    navigationActions,
    userActions,
    authenticationActions,
    defaultActions,
} from '../actions';

import {
    AppApi,
    AuthenticationApi,
    UserApi,
    defaultApi,
} from '../api';

import defaultRoot from './functions';

let sagaHistory;

export const navigationSaga = () => {
    const { types } = navigationActions();
    const setHistory = (history) => {
        sagaHistory = history;
    };

    function* push(action) {
        const { payload } = action;
        yield sagaHistory.push(payload);
    }

    function* back() {
        yield sagaHistory.goBack();
    }

    function* root({ history }) {
        yield setHistory(history);
        yield takeEvery(types.PUSH.DO, push);
        yield takeEvery(types.BACK.DO, back);
    }

    return {
        root,
    };
};

export const authenticationSaga = () => {
    const { creators, types } = authenticationActions();
    const login = createHttpSaga(creators.login, new AuthenticationApi().login);
    const logout = createHttpApiSaga(creators.logout, UserApi, 'revoke');

    function* navigationAfterLogin() {
        yield put(navigationActions().creators.push.do('/'));
    }

    function* clear() {
        yield call(() => localStorage.clear());
        yield put(navigationActions().creators.push.do('/login'));
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

export const userSaga = () => {
    const { types, creators } = userActions();
    const getMe = createHttpApiSaga(creators.getMe, UserApi, 'getMe');
    const init = createHttpApiSaga(appActions().creators.app, AppApi, 'app');

    function* getMeFailure() {
        yield put(navigationActions().creators.push.do('/login'));
    }

    function* root() {
        yield takeEvery(types.GET_ME.REQUEST, getMe);
        yield takeEvery(types.GET_ME.FAILURE, getMeFailure);
        yield takeEvery(types.GET_ME.SUCCESS, init);
    }

    return {
        root,
    };
};

export const defaultSaga = (object) => {
    const { types, creators } = defaultActions(object.name);
    const defaultSagas = createModelApiSagas(types, creators, defaultApi(object.route));

    return {
        root: () => defaultRoot(
            object.name,
            object.route,
            types,
            creators,
            defaultSagas,
        ),
    };
};
