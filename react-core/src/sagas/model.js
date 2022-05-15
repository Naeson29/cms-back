import { takeEvery } from 'redux-saga/effects';
import {
    createHttpSaga,
    createHttpApiSaga,
} from './http';

export function createModelSagas(types, creators, api) {
    const search = (creators.search && api.search) ? createHttpSaga(creators.search, api.search) : null;
    const refresh = (creators.refresh && api.search) ? createHttpSaga(creators.refresh, api.search) : null;
    const more = (creators.more && api.search) ? createHttpSaga(creators.more, api.search) : null;
    const paginate = (creators.paginate && api.search) ? createHttpSaga(creators.paginate, api.search) : null;
    const create = (creators.create && api.create) ? createHttpSaga(creators.create, api.create) : null;
    const read = (creators.read && api.read) ? createHttpSaga(creators.read, api.read) : null;
    const update = (creators.update && api.update) ? createHttpSaga(creators.update, api.update) : null;
    const destroy = (creators.destroy && api.destroy) ? createHttpSaga(creators.destroy, api.destroy) : null;

    function* root() {
        if (types?.SEARCH?.REQUEST && search) yield takeEvery(types.SEARCH.REQUEST, search);
        if (types?.REFRESH?.REQUEST && refresh) yield takeEvery(types.REFRESH.REQUEST, refresh);
        if (types?.MORE?.REQUEST && more) yield takeEvery(types.MORE.REQUEST, more);
        if (types?.PAGINATE?.REQUEST && paginate) yield takeEvery(types.PAGINATE.REQUEST, paginate);
        if (types?.CREATE?.REQUEST && create) yield takeEvery(types.CREATE.REQUEST, create);
        if (types?.READ?.REQUEST && read) yield takeEvery(types.READ.REQUEST, read);
        if (types?.UPDATE?.REQUEST && update) yield takeEvery(types.UPDATE.REQUEST, update);
        if (types?.DESTROY?.REQUEST && destroy) yield takeEvery(types.DESTROY.REQUEST, destroy);
    }

    return {
        search,
        refresh,
        more,
        paginate,
        create,
        read,
        update,
        destroy,
        root,
    };
}

export function createModelApiSagas(types, creators, ApiClass) {
    const search = (creators.search && (new ApiClass()).search) ? createHttpApiSaga(creators.search, ApiClass, 'search') : null;
    const refresh = (creators.refresh && (new ApiClass()).search) ? createHttpApiSaga(creators.refresh, ApiClass, 'search') : null;
    const more = (creators.more && (new ApiClass()).search) ? createHttpApiSaga(creators.more, ApiClass, 'search') : null;
    const paginate = (creators.paginate && (new ApiClass()).search) ? createHttpApiSaga(creators.paginate, ApiClass, 'search') : null;
    const create = (creators.create && (new ApiClass()).create) ? createHttpApiSaga(creators.create, ApiClass, 'create') : null;
    const read = (creators.read && (new ApiClass()).read) ? createHttpApiSaga(creators.read, ApiClass, 'read') : null;
    const update = (creators.update && (new ApiClass()).update) ? createHttpApiSaga(creators.update, ApiClass, 'update') : null;
    const destroy = (creators.destroy && (new ApiClass()).destroy) ? createHttpApiSaga(creators.destroy, ApiClass, 'destroy') : null;

    function* root() {
        if (types?.SEARCH?.REQUEST && search) yield takeEvery(types.SEARCH.REQUEST, search);
        if (types?.REFRESH?.REQUEST && refresh) yield takeEvery(types.REFRESH.REQUEST, refresh);
        if (types?.MORE?.REQUEST && more) yield takeEvery(types.MORE.REQUEST, more);
        if (types?.PAGINATE?.REQUEST && paginate) yield takeEvery(types.PAGINATE.REQUEST, paginate);
        if (types?.CREATE?.REQUEST && create) yield takeEvery(types.CREATE.REQUEST, create);
        if (types?.READ?.REQUEST && read) yield takeEvery(types.READ.REQUEST, read);
        if (types?.UPDATE?.REQUEST && update) yield takeEvery(types.UPDATE.REQUEST, update);
        if (types?.DESTROY?.REQUEST && destroy) yield takeEvery(types.DESTROY.REQUEST, destroy);
    }

    return {
        search,
        refresh,
        more,
        paginate,
        create,
        read,
        update,
        destroy,
        root,
    };
}

export default createModelSagas;
