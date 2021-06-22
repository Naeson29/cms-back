import storage from 'redux-persist/lib/storage';

export const STORE_PERSIST_CONFIGURATION = {
    key: 'cms',
    storage,
    whitelist: ['Authentication'],
};

export default STORE_PERSIST_CONFIGURATION;
