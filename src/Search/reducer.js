/**
 * created by Hemadri Dasari on 26/05/2018
 */

import {Map, fromJS} from 'immutable';
import * as actions from './actions';

export default function Search(state = Map(), action) {
  switch (action.type) {

    case actions.FORM_SET_VALUE: {
      return state.setIn([action.formName, 'currentValues', action.field], action.value)
    }

    case actions.FORM_RESET: {
      return state.setIn([action.formName, 'currentValues'], state.getIn([action.formName, 'initialValues'], Map()))
    }

    case actions.FILTER_ADS:{
      return state.setIn([action.name, 'searchTerm'], action.searchTerm)
    }

    case actions.SORT_TABLE_COLUMN:{
      const sortOrder = state.getIn([action.name, 'sortedColumn', 'sortOrder'], 'asc')

      var sort= state.setIn([action.name, 'sortedColumn'], fromJS({
          columnID: action.columnID,
          sortOrder: action.sortOrder ? action.sortOrder : (sortOrder === 'asc' ? 'desc': 'asc')
      }));
      return sort
    }
    default:
      return state
  }
}
