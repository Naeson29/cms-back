import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { STORE_PERSIST_CONFIGURATION } from './configuration';
import configureStore from './configure';
import rootReducer from '../reducers';

// import Sagas
import AuthenticationSaga from '../sagas/Authentication';
import NavigationSaga from '../sagas/Navigation';
import UserSaga from '../sagas/User';

const { store, sagaMiddleware } = configureStore(rootReducer, STORE_PERSIST_CONFIGURATION);
export const persist = persistStore(store);
export const history = createBrowserHistory({}, store);
syncHistoryWithStore(history, store);

export default store;

// run Sagas listeners
sagaMiddleware.run(AuthenticationSaga().root);
sagaMiddleware.run(NavigationSaga().root, { history });
sagaMiddleware.run(UserSaga().root);
