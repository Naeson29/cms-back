import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import panelReducer from './panel';
import modalReducer from './modal';
import authenticationReducer from './authentication';
import userReducer from './user';
import publicationReducer from './publication';

export default combineReducers({
    routing: routerReducer,
    panel: panelReducer,
    modal: modalReducer,
    authentication: authenticationReducer,
    user: userReducer,
    publication: publicationReducer,
});
