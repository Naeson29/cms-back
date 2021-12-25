import {
    takeEvery, put, call,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
    modalActions,
    panelActions,
} from '../actions';

import toasts from './toast';

const { defaultErrors, defaultSuccess, success } = toasts;

const theme = 'colored';
const paramToast = { theme };

function* createSuccess(name) {
    yield put(panelActions().creators.close.do());
    yield call(() => toast.success(success[name] ? success[name].create : defaultSuccess.create, paramToast));
}

function* createFailure() {
    yield put(panelActions().creators.close.do());
    yield call(toast.error, defaultErrors.create);
}

function* updateSuccess(name) {
    yield put(panelActions().creators.close.do());
    yield call(() => toast.success(success[name] ? success[name].update : defaultSuccess.update, paramToast));
}

function* updateFailure() {
    yield put(panelActions().creators.close.do());
    yield call(toast.error, defaultErrors.update);
}

function* onDelete() {
    yield put(modalActions().creators.close.do());
}

function* destroySuccess(name) {
    yield call(() => toast.success(success[name] ? success[name].delete : defaultSuccess.delete, paramToast));
}

function* destroyFailure() {
    yield call(() => toast.error(defaultErrors.delete, paramToast));
}

function* defaultRoot(name, types, defaultSagas) {
    yield* defaultSagas.root();
    yield takeEvery(types.DESTROY.REQUEST, onDelete);
    yield takeEvery(types.CREATE.SUCCESS, () => createSuccess(name));
    yield takeEvery(types.UPDATE.SUCCESS, () => updateSuccess(name));
    yield takeEvery(types.DESTROY.SUCCESS, () => destroySuccess(name));
    yield takeEvery(types.CREATE.FAILURE, createFailure);
    yield takeEvery(types.UPDATE.FAILURE, updateFailure);
    yield takeEvery(types.DESTROY.FAILURE, destroyFailure);
}

export default defaultRoot;
