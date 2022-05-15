import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './app';
import filterReducer from './filter';
import panelReducer from './panel';
import modalReducer from './modal';
import authenticationReducer from './authentication';
import userReducer from './user';
import defaultReducer from './default';
import models from '../models';

const defaultReducers = Object.keys(models).filter(key => !!models[key].name).map(key => models[key].name);

export default combineReducers({
    ...defaultReducers.reduce((o, key) => ({
        ...o, [key]: defaultReducer(key),
    }), {}),
    routing: routerReducer,
    app: appReducer,
    filter: filterReducer,
    panel: panelReducer,
    modal: modalReducer,
    authentication: authenticationReducer,
    user: userReducer,
});
