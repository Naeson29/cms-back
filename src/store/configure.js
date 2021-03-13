import {
    createStore, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';

export default function configure(rootReducer, persistConfig) {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const sagaMiddleware = createSagaMiddleware();

    const enhancers = [
        applyMiddleware(sagaMiddleware),
        ...(process.env.NODE_ENV === 'development' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function' // eslint-disable-line no-underscore-dangle
            ? [window.__REDUX_DEVTOOLS_EXTENSION__()] // eslint-disable-line no-underscore-dangle
            : []),
    ];

    const store = createStore(
        persistedReducer,
        compose(...enhancers),
    );

    return {
        store, sagaMiddleware,
    };
}
