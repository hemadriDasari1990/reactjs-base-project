/**
 * created by Hemadri Dasari on 26/05/2018
 */

import { combineReducers } from 'redux-immutable';
import Search from './Search/reducer';
import Adslots from './AdSlotsData/reducer';
import Form from './Form/reducer';

const appReducer = combineReducers({
  Search,
  Adslots,
  Form
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
