import { takeEvery } from 'redux-saga/effects';
import { types } from '../../Actions/Navigation';

let sagaHistory;

export default () => {
    const setHistory = (history) => {
        sagaHistory = history;
    };

    function* push(action) {
        const { payload } = action;
        yield sagaHistory.push(payload.path);
    }

    function* back() {
        yield sagaHistory.goBack();
    }

    function* root({ history }) {
        yield setHistory(history);
        yield takeEvery(types.PUSH.DO, push);
        yield takeEvery(types.BACK.DO, back);
    }

    return {
        root,
    };
};
