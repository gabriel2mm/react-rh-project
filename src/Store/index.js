import { createStore  } from 'redux';
import rootReducer  from '../Reducer/index';

const store = createStore(rootReducer);

export default store;