import { put, takeEvery} from '@redux-saga/core/effects';
import { createHttpApiSaga, createModelApiSagas } from '../../../react-core';

// Api
import UserApi from '../../Api/User';

// Actions
import { types, creators } from '../../Actions/User';
import { creators as ModalCreators } from '../../Actions/Modal';
import { creators as navigationCreators } from '../../Actions/Navigation';

export default () => {
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
};