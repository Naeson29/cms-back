import {
    takeEvery, put, call,
} from 'redux-saga/effects';
import {
    createHttpApiSaga, createHttpSaga, createModelApiSagas,
} from '../../react-core';
import { toast } from 'react-toastify';
import {
    navigationActions,
    userActions,
    authenticationActions,
    modalActions,
} from '../actions';

import {
    authenticationApi,
    userApi,
} from '../api';

let sagaHistory;

export const navigationSaga = () => {
    const { types } = navigationActions();
    const setHistory = (history) => (sagaHistory = history);

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
    const login = createHttpSaga(creators.login, new authenticationApi().login);
    const logout = createHttpApiSaga(creators.logout, userApi, 'revoke');

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
    const defaultSagas = createModelApiSagas(types, creators, userApi);
    const getMe = createHttpApiSaga(creators.getMe, userApi, 'getMe');

    function* onDelete() {
        yield put(modalActions().creators.close.do());
    }

    function* updateSuccess() {
        yield call(toast.success, "L'utilisateur a été modifié");
    }

    function* updateFailure() {
        yield call(toast.error, 'Echec de la modification');
    }

    function* getMeFailure() {
        yield put(navigationActions().creators.push.do('/login'));
    }

    function* root() {
        yield* defaultSagas.root();
        yield takeEvery(types.GET_ME.REQUEST, getMe);
        yield takeEvery(types.GET_ME.FAILURE, getMeFailure);
        yield takeEvery(types.DESTROY.REQUEST, onDelete);
        yield takeEvery(types.UPDATE.SUCCESS, updateSuccess);
        yield takeEvery(types.UPDATE.FAILURE, updateFailure);
    }

    return {
        root,
    };
};