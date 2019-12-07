import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer  from '../Reducer/index';
import { persistStore, persistReducer,createTransform } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import Flatted from  'flatted';

export const transformCircular = createTransform(
    (inboundState, key) => Flatted.stringify(inboundState),
    (outboundState, key) => Flatted.parse(outboundState),
)

const persistConfig = {
    key: 'root',
    storage : storageSession,
    stateReconciler: hardSet,
    transforms: [transformCircular]
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, {}, applyMiddleware(thunk));

const persistor = persistStore(store);

export {persistor, store};