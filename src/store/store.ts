import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../rootReducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log('Initial state: ', store.getState());
