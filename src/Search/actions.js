/**
 * created by Hemadri Dasari on 26/05/2018
 */

export const FORM_SET_VALUE = 'FORM_SET_VALUE';
export const FORM_RESET = 'FORM_RESET';
export const FILTER_ADS = 'FILTER_ADS';
export const SORT_ADS_COLUMN = 'SORT_ADS_COLUMN';

export function setValue(formName, field, value) {
  return {
    type: FORM_SET_VALUE,
    formName,
    field,
    value
  }
}

export function reset(formName) {
  return {
    type: FORM_RESET,
    formName
  }
}

export function filterAds(name, searchTerm){
  return {
    type: FILTER_ADS,
    name,
    searchTerm
  }
}

export function sortByColumn(name, columnID, sortOrder) {
  return {
    type: SORT_ADS_COLUMN,
    name,
    columnID,
    sortOrder
  }
}