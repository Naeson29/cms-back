import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { STORE_PERSIST_CONFIGURATION } from './configuration';
import configureStore from './configure';
import rootReducer from '../reducers';
import models from '../models';

import {
    authenticationSaga,
    userSaga,
    navigationSaga,
    defaultSaga,
} from '../sagas';

const { store, sagaMiddleware } = configureStore(rootReducer, STORE_PERSIST_CONFIGURATION);
const persist = persistStore(store);
const history = createBrowserHistory({}, store);
syncHistoryWithStore(history, store);

sagaMiddleware.run(authenticationSaga().root);
sagaMiddleware.run(navigationSaga().root, { history });
sagaMiddleware.run(userSaga().root);

Object.keys(models).forEach((key) => {
    const { name = '', route = '' } = models[key];
    if (name && route) {
        sagaMiddleware.run(defaultSaga({
            name, route,
        }).root);
    }
});

export default store;

export {
    persist,
    history,
};
