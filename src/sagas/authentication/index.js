import {
    takeEvery, put, call,
} from 'redux-saga/effects';
import {
    createHttpApiSaga, createHttpSaga,
} from '../../../react-core';

// api
import AuthenticationApi from '../../api/authentication';
import UserApi from '../../api/User';

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
} = authenticationActions;

export default () => {
    const login = createHttpSaga(creators.login, AuthenticationApi.login);
    const logout = createHttpApiSaga(creators.logout, UserApi, 'revoke');

    function* navigationAfterLogin() {
        yield put(navigationActions.creators.push.do('/'));
    }

    function* clear() {
        yield call(() => AuthenticationService.logout());
        yield put(navigationActions.creators.push.do('/login'));
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
