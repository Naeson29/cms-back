import {
    takeEvery, put, call,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
    createHttpApiSaga, createHttpSaga, createModelApiSagas,
} from '../../react-core';
import {
    navigationActions,
    userActions,
    authenticationActions,
    modalActions,
    panelActions,
    defaultActions,
} from '../actions';

import {
    AuthenticationApi,
    UserApi,
    defaultApi,
} from '../api';

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
    const defaultSagas = createModelApiSagas(types, creators, UserApi);
    const getMe = createHttpApiSaga(creators.getMe, UserApi, 'getMe');

    function* createSuccess() {
        yield put(panelActions().creators.close.do());
        yield call(toast.success, "L'utilisateur a été crée");
    }

    function* createFailure() {
        yield put(panelActions().creators.close.do());
        yield call(toast.error, 'Echec de la création');
    }

    function* updateSuccess() {
        yield put(panelActions().creators.close.do());
        yield call(toast.success, "L'utilisateur a été modifié");
    }

    function* updateFailure() {
        yield put(panelActions().creators.close.do());
        yield call(toast.error, 'Echec de la modification');
    }

    function* onDelete() {
        yield put(modalActions().creators.close.do());
    }

    function* destroySuccess() {
        yield call(toast.success, "L'utilisateur a été supprimé");
    }

    function* destroyFailure() {
        yield call(toast.error, 'Echec de la suppression');
    }

    function* getMeFailure() {
        yield put(navigationActions().creators.push.do('/login'));
    }

    function* root() {
        yield* defaultSagas.root();
        yield takeEvery(types.GET_ME.REQUEST, getMe);
        yield takeEvery(types.GET_ME.FAILURE, getMeFailure);
        yield takeEvery(types.DESTROY.REQUEST, onDelete);
        yield takeEvery(types.CREATE.SUCCESS, createSuccess);
        yield takeEvery(types.UPDATE.SUCCESS, updateSuccess);
        yield takeEvery(types.DESTROY.SUCCESS, destroySuccess);
        yield takeEvery(types.CREATE.FAILURE, createFailure);
        yield takeEvery(types.UPDATE.FAILURE, updateFailure);
        yield takeEvery(types.DESTROY.FAILURE, destroyFailure);
    }

    return {
        root,
    };
};

export const defaultSaga = (object) => {
    const { types, creators } = defaultActions(object.name);
    const defaultSagas = createModelApiSagas(types, creators, defaultApi(object.path));

    function* createSuccess() {
        yield put(panelActions().creators.close.do());
        yield call(toast.success, "L'utilisateur a été crée");
    }

    function* createFailure() {
        yield put(panelActions().creators.close.do());
        yield call(toast.error, 'Echec de la création');
    }

    function* updateSuccess() {
        yield put(panelActions().creators.close.do());
        yield call(toast.success, "L'utilisateur a été modifié");
    }

    function* updateFailure() {
        yield put(panelActions().creators.close.do());
        yield call(toast.error, 'Echec de la modification');
    }

    function* onDelete() {
        yield put(modalActions().creators.close.do());
    }

    function* destroySuccess() {
        yield call(toast.success, "L'utilisateur a été supprimé");
    }

    function* destroyFailure() {
        yield call(toast.error, 'Echec de la suppression');
    }

    function* root() {
        yield* defaultSagas.root();
        yield takeEvery(types.DESTROY.REQUEST, onDelete);
        yield takeEvery(types.CREATE.SUCCESS, createSuccess);
        yield takeEvery(types.UPDATE.SUCCESS, updateSuccess);
        yield takeEvery(types.DESTROY.SUCCESS, destroySuccess);
        yield takeEvery(types.CREATE.FAILURE, createFailure);
        yield takeEvery(types.UPDATE.FAILURE, updateFailure);
        yield takeEvery(types.DESTROY.FAILURE, destroyFailure);
    }

    return {
        root,
    };
};
