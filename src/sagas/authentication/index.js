import {
    takeEvery, put, call,
} from 'redux-saga/effects';
import {
    createHttpApiSaga, createHttpSaga,
} from '../../../react-core';

// api
import {
    authenticationApi,
    userApi,
} from '../../api';

// actions
import {
    navigationActions,
    authenticationActions,
} from '../../actions';

// services
import AuthenticationService from '../../services/authentication';

const {
    types,
    creators,
} = authenticationActions();

export default () => {
    const login = createHttpSaga(creators.login, new authenticationApi().login);
    const logout = createHttpApiSaga(creators.logout, userApi, 'revoke');

    function* navigationAfterLogin() {
        yield put(navigationActions().creators.push.do('/'));
    }

    function* clear() {
        yield call(() => AuthenticationService.logout());
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
