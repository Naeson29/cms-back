import { persistStore } from 'redux-persist';
import { STORE_PERSIST_CONFIGURATION } from './configuration';
import configureStore from './configure';
import rootReducer from '../reducers';

// import Sagas
import AuthenticationSaga from '../sagas/Authentication';
import NavigationSaga from '../sagas/Navigation';
import UserSaga from '../sagas/User';

const { store, sagaMiddleware } = configureStore(rootReducer, STORE_PERSIST_CONFIGURATION);
export const persist = persistStore(store);
export default store;

// run Sagas listeners
sagaMiddleware.run(AuthenticationSaga);
sagaMiddleware.run(NavigationSaga);
sagaMiddleware.run(UserSaga);
