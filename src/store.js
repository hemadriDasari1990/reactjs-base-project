/**
 * created by Hemadri Dasari on 26/05/2018
 */

import {Map} from 'immutable';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const sessionMiddleware = _store => next => action => {
  let result = next(action)
  switch(action.type) {
    default:
      break;
  }
  return result
}

export default createStore(
  reducer,
  Map(),
  compose(
    applyMiddleware(thunk, sessionMiddleware),
    window && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
