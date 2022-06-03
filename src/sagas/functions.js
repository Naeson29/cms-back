import {
    takeEvery, put, call, select,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
    modalActions,
    navigationActions,
    panelActions,
} from '../actions';

import toasts from './toast';
import { getScreenSelector } from '../selectors';
import { scrollTop } from '../utilities/functions';

const { defaultErrors, defaultSuccess, success } = toasts;
const getState = state => state;

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

function* destroySuccess(name, creators) {
    const state = yield select(getState);
    const { ParamsList } = getScreenSelector(name);
    const params = ParamsList(state);

    yield call(() => toast.success(success[name] ? success[name].delete : defaultSuccess.delete, paramToast));
    yield put(creators.refresh.request({ params }));
}

function* destroyFailure() {
    yield call(() => toast.error(defaultErrors.delete, paramToast));
}

function* onRefresh() {
    yield call(() => scrollTop());
    yield put(panelActions().creators.close.do());
}

function* defaultRoot(name, route, types, creators, defaultSagas) {
    yield* defaultSagas.root();
    yield takeEvery(types.DESTROY.REQUEST, onDelete);
    yield takeEvery(types.CREATE.SUCCESS, () => createSuccess(name, route));
    yield takeEvery(types.UPDATE.SUCCESS, () => updateSuccess(name));
    yield takeEvery(types.DESTROY.SUCCESS, () => destroySuccess(name, creators));
    yield takeEvery(types.CREATE.FAILURE, createFailure);
    yield takeEvery(types.UPDATE.FAILURE, updateFailure);
    yield takeEvery(types.DESTROY.FAILURE, destroyFailure);
    yield takeEvery(types.REFRESH.REQUEST, onRefresh);
    yield takeEvery(types.PAGINATE.REQUEST, onRefresh);
}

export default defaultRoot;
