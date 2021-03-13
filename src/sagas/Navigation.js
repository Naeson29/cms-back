import { takeEvery } from 'redux-saga/effects';
import { types } from '../actions/Navigation';

export function NavigationSaga() {
    function* push(action) {
        const { payload } = action;
        yield payload.history.push(payload.path);
    }

    function* back(action) {
        const { payload } = action;
        yield payload.history.goBack();
    }

    function* root() {
        yield takeEvery(types.PUSH.DO, push);
        yield takeEvery(types.BACK.DO, back);
    }

    return {
        root,
    };
}
export default NavigationSaga().root;
