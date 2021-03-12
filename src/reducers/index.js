import {combineReducers} from 'redux';
import {routerReducer}   from 'react-router-redux';

import PanelReducer from './Panel';
import AuthenticationReducer from './Authentication';
import UserReducer from './User';

export default combineReducers({
    routing        : routerReducer,
    Panel          : PanelReducer,
    Authentication : AuthenticationReducer,
    User           : UserReducer,
});
