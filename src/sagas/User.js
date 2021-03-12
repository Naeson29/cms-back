import {createHttpApiSaga, createModelApiSagas} from '../../react-core';
import {put, call, takeEvery} from "@redux-saga/core/effects";
import {toast} from "react-toastify";

import UserApi from '../api/UserApi';
import { types, creators } from '../actions/User';
import {creators as navigationCreators} from "../actions/Navigation";
import {defaultLoadParams} from "../utils/const";

export function UserSaga() {

    const defaultSagas = createModelApiSagas(types, creators, UserApi);
    const getMe = createHttpApiSaga(creators.getMe, UserApi, 'getMe');

    function* afterCreate(){
        yield put(navigationCreators.push.do('/user'));
        yield call(toast.success, "Création effectuée avec succès", {
            autoClose: 1500,
            className: 'bg-info',
            hideProgressBar: true
        });
    }

    function* afterUpdate(){
        yield call(toast.success, "Modification effectuée avec succès", {
            autoClose: 1500 ,
            className: 'bg-info',
            hideProgressBar: true
        });
    }

    function* afterDelete(){
        yield put(creators.search.request(defaultLoadParams));
    }

    function* getMeFailure(){
        yield put(navigationCreators.push.do('/login'));
    }

    function* root() {
        yield* defaultSagas.root();
        // yield takeEvery(types.CREATE.SUCCESS, afterCreate);
        // yield takeEvery(types.UPDATE.SUCCESS, afterUpdate);
        // yield takeEvery(types.DESTROY.SUCCESS, afterDelete);
        yield takeEvery(types.GET_ME.REQUEST, getMe);
        yield takeEvery(types.GET_ME.FAILURE, getMeFailure);
    }

    return {
        root
    };
}

export default UserSaga().root;
