import {
    put, takeEvery, call,
} from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import {
    createHttpApiSaga, createModelApiSagas,
} from '../../../react-core';

// api
import UserApi from '../../api/User';

// actions
import {
    types, creators,
} from '../../actions/user';
import { creators as ModalCreators } from '../../actions/modal';
import { creators as navigationCreators } from '../../actions/navigation';

// toast


export default () => {
    const defaultSagas = createModelApiSagas(types, creators, UserApi);
    const getMe = createHttpApiSaga(creators.getMe, UserApi, 'getMe');

    function* onDelete() {
        yield put(ModalCreators.close.do());
    }

    function* updateSuccess() {
        yield call(toast.success, "L'utilisateur a été modifié");
    }

    function* updateFailure() {
        yield call(toast.error, 'Echec de la modification');
    }

    function* getMeFailure() {
        yield put(navigationCreators.push.do('/login'));
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
