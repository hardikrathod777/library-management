import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
 // Correct import statement
import { Provider } from 'react-redux';
import rootReducer from './Services/Reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
