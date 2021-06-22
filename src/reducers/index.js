import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import PanelReducer from './panel';
import ModalReducer from './modal';
import AuthenticationReducer from './authentication';
import UserReducer from './user';

export default combineReducers({
    routing: routerReducer,
    Panel: PanelReducer,
    Modal: ModalReducer,
    Authentication: AuthenticationReducer,
    User: UserReducer,
});
