import {
    takeEvery, put, call,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
    modalActions,
    navigationActions,
} from '../actions';

import toasts from './toast';

const { defaultErrors, defaultSuccess, success } = toasts;

const theme = 'colored';
const paramToast = { theme };

function* createSuccess(name, route) {
    yield call(() => toast.success(success[name] ? success[name].create : defaultSuccess.create, paramToast));
    yield put(navigationActions().creators.push.do(`/${route}`));
}

function* createFailure() {
    yield call(() => toast.error(defaultErrors.create, paramToast));
}

function* updateSuccess(name) {
    yield call(() => toast.success(success[name] ? success[name].update : defaultSuccess.update, paramToast));
}

function* updateFailure() {
    yield call(() => toast.error(defaultErrors.update, paramToast));
}

function* onDelete() {
    yield put(modalActions().creators.close.do());
}

function* destroySuccess(action, name, creators) {    
    yield call(() => toast.success(success[name] ? success[name].delete : defaultSuccess.delete, paramToast));
    yield put(creators.refresh.request(action.meta));
}

function* destroyFailure() {
    yield call(() => toast.error(defaultErrors.delete, paramToast));
}

function* defaultRoot(name, route, types, creators, defaultSagas) {
    yield* defaultSagas.root();
    yield takeEvery(types.DESTROY.REQUEST, onDelete);
    yield takeEvery(types.CREATE.SUCCESS, () => createSuccess(name, route));
    yield takeEvery(types.UPDATE.SUCCESS, () => updateSuccess(name));
    yield takeEvery(types.DESTROY.SUCCESS, (action) => destroySuccess(action, name, creators));
    yield takeEvery(types.CREATE.FAILURE, createFailure);
    yield takeEvery(types.UPDATE.FAILURE, updateFailure);
    yield takeEvery(types.DESTROY.FAILURE, destroyFailure);
}

export default defaultRoot;
