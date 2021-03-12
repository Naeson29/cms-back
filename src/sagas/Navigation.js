import { types } from '../actions/Navigation';
import { takeEvery } from 'redux-saga/effects';
import { history } from "../App";

export function NavigationSaga() {

    function* push(data){
        yield history.push(data.payload.path);
    }

    function* back(){
        yield history.goBack();
    }

    function* root() {
        yield takeEvery(types.PUSH.DO, push);
        yield takeEvery(types.BACK.DO, back);
    }

    return {
        root
    };

}
export default NavigationSaga().root;
