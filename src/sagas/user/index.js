import {
    put, takeEvery, call,
} from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import {
    createHttpApiSaga, createModelApiSagas,
} from '../../../react-core';

// api
import { userApi } from '../../api';

// actions
import {
    modalActions,
    navigationActions,
    userActions,
} from '../../actions';

const {
    types,
    creators,
} = userActions();

export default () => {
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
