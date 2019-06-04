import axios from 'axios'
import { FETCH_USERS } from './types'

import {
  API,
  limitQuery,
  limitUserResults,
  offsetQuery
} from '../apiConfiguration'

export const headers = {
  Accept: 'application/json'
}

// export function fetchUsers() {
export const fetchUsers = () => dispatch => {
  const endPoint = `${API}?${limitQuery}${limitUserResults}&${offsetQuery}${30}`

  /*
  const request = axios.get(endPoint, { headers });
  return {
    type: FETCH_COMMENTS,
    payload: request
  };
*/
  return axios.get(endPoint, { headers }).then(response => {
    dispatch({ type: FETCH_USERS, payload: response.data })
  })
}
