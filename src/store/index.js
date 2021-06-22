import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { STORE_PERSIST_CONFIGURATION } from './configuration';
import configureStore from './configure';
import rootReducer from '../reducers';

// import sagas
import AuthenticationSaga from '../sagas/authentication';
import NavigationSaga from '../sagas/navigation';
import UserSaga from '../sagas/user';

const { store, sagaMiddleware } = configureStore(rootReducer, STORE_PERSIST_CONFIGURATION);
export const persist = persistStore(store);
export const history = createBrowserHistory({}, store);
syncHistoryWithStore(history, store);

export default store;

// run sagas listeners
sagaMiddleware.run(AuthenticationSaga().root);
sagaMiddleware.run(NavigationSaga().root, { history });
sagaMiddleware.run(UserSaga().root);
