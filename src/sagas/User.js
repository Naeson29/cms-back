import {
    put, takeEvery,
} from '@redux-saga/core/effects';
import {
    createHttpApiSaga, createModelApiSagas,
} from '../../react-core';

import UserApi from '../api/UserApi';
import {
    types, creators,
} from '../actions/User';
import { creators as ModalCreators } from '../actions/Modal';
import { creators as navigationCreators } from '../actions/Navigation';

export function UserSaga() {
    const defaultSagas = createModelApiSagas(types, creators, UserApi);
    const getMe = createHttpApiSaga(creators.getMe, UserApi, 'getMe');

    function* onDelete() {
        yield put(ModalCreators.close.do());
    }

    function* getMeFailure() {
        yield put(navigationCreators.push.do('/login'));
    }

    function* root() {
        yield* defaultSagas.root();
        yield takeEvery(types.GET_ME.REQUEST, getMe);
        yield takeEvery(types.GET_ME.FAILURE, getMeFailure);
        yield takeEvery(types.DESTROY.REQUEST, onDelete);
    }

    return {
        root,
    };
}

export default UserSaga().root;
