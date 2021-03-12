import { call, put, select } from 'redux-saga/effects';
import { mergeWithConcat } from '../helpers';
import { getDefaultAuthorizationHeader } from '../selectors/authentication';

export const DEFAULT_MAP_STATE_TO_HTTP_CONFIG = { headers: getDefaultAuthorizationHeader };

export const applyMapStateToHttpConfig = (selectors = {}) => state => Object.entries(selectors).reduce((acc, [key, selector]) => ({
    ...acc,
    [key]: typeof selector === 'function' ? selector(state) : applyMapStateToHttpConfig(selector)(state),
}), {});

export function createHttpSaga(creators, api, mapStateToHttpConfig = DEFAULT_MAP_STATE_TO_HTTP_CONFIG) {
    return function* httpSaga({ payload = {}, meta } = {}) {
        try {
            const httpConfig = mapStateToHttpConfig ? yield select(applyMapStateToHttpConfig(mapStateToHttpConfig)) : {};
            const apiPayload = mergeWithConcat(httpConfig, payload);

            const { data } = yield call(api, apiPayload);
            yield put(creators.success(data, meta));
        } catch ({ response }) {
            yield put(creators.failure(response, meta));
        }
    };
}

export function createHttpApiSaga(
    creators,
    ApiClass,
    apiMethod,
    mapStateToHttpApiConfig = DEFAULT_MAP_STATE_TO_HTTP_CONFIG,
    mapStateToHttpMethodConfig = {},
) {
    return function* httpApiSaga(action = {}) {
        const httpApiConfig = mapStateToHttpApiConfig ? yield select(applyMapStateToHttpConfig(mapStateToHttpApiConfig)) : {};
        const apiInstance = new ApiClass(httpApiConfig);
        const api = apiInstance[apiMethod];
        const httpSaga = createHttpSaga(creators, api.bind(apiInstance), mapStateToHttpMethodConfig);
        yield httpSaga(action);
    };
}
