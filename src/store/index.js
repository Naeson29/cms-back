import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { STORE_PERSIST_CONFIGURATION } from './configuration';
import configureStore from './configure';
import rootReducer from '../reducers';

// import sagas
import {
    authenticationSaga,
    userSaga,
    navigationSaga,
    publicationSaga,
} from '../sagas';

const { store, sagaMiddleware } = configureStore(rootReducer, STORE_PERSIST_CONFIGURATION);
export const persist = persistStore(store);
export const history = createBrowserHistory({}, store);
syncHistoryWithStore(history, store);

export default store;

// run sagas listeners
sagaMiddleware.run(authenticationSaga().root);
sagaMiddleware.run(navigationSaga().root, { history });
sagaMiddleware.run(userSaga().root);
sagaMiddleware.run(publicationSaga().root);
