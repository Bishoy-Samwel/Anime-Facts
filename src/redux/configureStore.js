import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { elementsReducer } from './elements';

const reducer = combineReducers({
  elements: elementsReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
