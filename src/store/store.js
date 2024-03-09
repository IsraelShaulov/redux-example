import { createStore, combineReducers, applyMiddleware } from 'redux';
import cakeReducer from './reducers/cakeReducer';
import iceCreamReducer from './reducers/iceCreamReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import userReducer from './reducers/userReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  // composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
