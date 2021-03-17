import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { STORE_PERSIST_CONFIGURATION } from './Configuration';
import configureStore from './Configure';
import rootReducer from '../Reducers';

// import Sagas
import AuthenticationSaga from '../Sagas/Authentication';
import NavigationSaga from '../Sagas/Navigation';
import UserSaga from '../Sagas/User';

const { store, sagaMiddleware } = configureStore(rootReducer, STORE_PERSIST_CONFIGURATION);
export const persist = persistStore(store);
export const history = createBrowserHistory({}, store);
syncHistoryWithStore(history, store);

export default store;

// run Sagas listeners
sagaMiddleware.run(AuthenticationSaga().root);
sagaMiddleware.run(NavigationSaga().root, { history });
sagaMiddleware.run(UserSaga().root);
