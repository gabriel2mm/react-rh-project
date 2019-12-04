import { createStore  } from 'redux';
import rootReducer  from '../Reducer/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'psRoot',
    storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer);

const persistor = persistStore(store);

export {persistor, store};