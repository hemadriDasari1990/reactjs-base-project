/**
 * created by Hemadri Dasari on 26/05/2018
 */

import * as actions from './actions';
import {Map, fromJS} from 'immutable';

export default function Adslots(state = Map(), action) {
	switch(action.type) {
    case actions.GET_AD_SLOTS_REQUEST:
      return state.setIn(['ads', 'loading'], true)
      .deleteIn(['ads', 'errors'])
      .deleteIn(['ads', 'success'])
    case actions.GET_AD_SLOTS_SUCCESS: {
      return state
      .setIn(['ads', 'loading'], false)
      .setIn(['ads', 'success'], fromJS(action.data))
    }
    case actions.GET_AD_SLOTS_ERROR: {
     return state
      .setIn(['ads', 'loading'], false)
      .setIn(['ads', 'errors'], action.errors)
    }
	  default:
	      return state
	}
}