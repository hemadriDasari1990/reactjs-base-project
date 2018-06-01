/**
 * created by Hemadri Dasari on 26/05/2018
 */

import * as actions from './actions';
import {Map, fromJS} from 'immutable';

export default function Form(state = Map(), action) {
	switch(action.type) {
    case actions.ADD_AD_SLOTS_REQUEST:
      return state.setIn(['ads', 'add', 'loading'], true)
      .deleteIn(['ads', 'add', 'errors'])
      .deleteIn(['ads', 'add', 'success'])
    case actions.ADD_AD_SLOTS_SUCCESS: {
      return state
      .setIn(['ads', 'add', 'loading'], false)
      .setIn(['ads', 'add', 'success'], fromJS(action.data))
    }
    case actions.ADD_AD_SLOTS_ERROR: {
     return state
      .setIn(['ads', 'add', 'loading'], false)
      .setIn(['ads', 'add', 'errors'], action.errors)
    }

    case actions.UPDATE_AD_SLOTS_REQUEST:
      return state.setIn(['ads', 'update', 'loading'], true)
      .deleteIn(['ads', 'update', 'errors'])
      .deleteIn(['ads', 'update', 'success'])
    case actions.UPDATE_AD_SLOTS_SUCCESS: {
      return state
      .setIn(['ads', 'update', 'loading'], false)
      .setIn(['ads', 'update', 'success'], fromJS(action.data))
    }
    case actions.UPDATE_AD_SLOTS_ERROR: {
     return state
      .setIn(['ads', 'update', 'loading'], false)
      .setIn(['ads', 'update', 'errors'], action.errors)
    }

    case actions.CLEAR_STATE: {
     return state
      .deleteIn(['ads', 'add', 'success'])
      .deleteIn(['ads', 'add', 'errors'])
      .deleteIn(['ads', 'add', 'loading'])
    }
	  default:
	      return state
	}
}