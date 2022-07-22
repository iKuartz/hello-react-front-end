import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from 'redux-thunk';

import greetingReducer from './greetings/greetings';

const rootReducer = combineReducers({
  greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
