/**
 * created by Hemadri Dasari on 26/05/2018
 */

import {Map, fromJS} from 'immutable';
import config from '../config';
import axios from 'axios';

export const URL_PREFIX = config.apiBaseUrl;

export const ADD_AD_SLOTS_REQUEST = 'ADD_AD_SLOTS_REQUEST';
export const ADD_AD_SLOTS_SUCCESS = 'ADD_AD_SLOTS_SUCCESS';
export const ADD_AD_SLOTS_ERROR = 'ADD_AD_SLOTS_ERROR';


export function addAdslotsRequest(){
  return {
    type: ADD_AD_SLOTS_REQUEST
  }
}

export function addAdslotsSuccess(data){
  return {
    type: ADD_AD_SLOTS_SUCCESS,
    data: data
  }
}

export function addAdslotsError(errors){
  return {
    type: ADD_AD_SLOTS_ERROR,
    erros: errors
  }
}

export function addAdslots(data) {
  return dispatch => {
    dispatch(addAdslotsRequest());
    return axios.post(`${URL_PREFIX}/adslots/`, data)
      .then(res => {
        dispatch(addAdslotsSuccess(res.data));      
      })
      .catch(errors => {
        dispatch(addAdslotsError(errors));
      })
  }
}

export const UPDATE_AD_SLOTS_REQUEST = 'UPDATE_AD_SLOTS_REQUEST';
export const UPDATE_AD_SLOTS_SUCCESS = 'UPDATE_AD_SLOTS_SUCCESS';
export const UPDATE_AD_SLOTS_ERROR = 'UPDATE_AD_SLOTS_ERROR';


export function updateAdslotsRequest(){
  return {
    type: UPDATE_AD_SLOTS_REQUEST
  }
}

export function updateAdslotsSuccess(data){
  return {
    type: UPDATE_AD_SLOTS_SUCCESS,
    data: data
  }
}

export function updateAdslotsError(errors){
  return {
    type: UPDATE_AD_SLOTS_ERROR,
    erros: errors
  }
}

export function updateAdslots(data, id) {
  return dispatch => {
    dispatch(updateAdslotsRequest());
    return axios.patch(`${URL_PREFIX}/adslots/${id}`, data)
      .then(res => {
        dispatch(updateAdslotsSuccess(res.data));      
      })
      .catch(errors => {
        dispatch(updateAdslotsError(errors));
      })
  }
}

export const CLEAR_STATE = 'CLEAR_STATE';

export function clearState(){
  return {
    type: CLEAR_STATE
  }
}
