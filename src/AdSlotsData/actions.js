/**
 * created by Hemadri Dasari on 26/05/2018
 */

import axios from 'axios';
import {Map, fromJS} from 'immutable';
import config from '../config';

export const URL_PREFIX =  config.apiBaseUrl;;

export const GET_AD_SLOTS_REQUEST = 'GET_AD_SLOTS_REQUEST';
export const GET_AD_SLOTS_SUCCESS = 'GET_AD_SLOTS_SUCCESS';
export const GET_AD_SLOTS_ERROR = 'GET_AD_SLOTS_ERROR';


export function getAdslotsRequest(){
  return {
    type: GET_AD_SLOTS_REQUEST
  }
}

export function getAdslotsSuccess(data){
  return {
    type: GET_AD_SLOTS_SUCCESS,
    data: data
  }
}

export function getAdslotsError(errors){
  return {
    type: GET_AD_SLOTS_ERROR,
    erros: errors
  }
}

export function getAdslots() {
  return dispatch => {
    dispatch(getAdslotsRequest());
    return axios.get(`${URL_PREFIX}/adslots/`)
      .then(res => {
        dispatch(getAdslotsSuccess(res.data.data.adslots));      
      })
      .catch(errors => {
        dispatch(getAdslotsError(errors));
      })
  }
}

