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
export const fetchUsers = () => async dispatch => {
  const endPoint = `${API}?${limitQuery}${limitUserResults}&${offsetQuery}${30}`

  try {
    const response = await axios.get(endPoint, { headers })
    return dispatch({ type: FETCH_USERS, payload: response.data })
  } catch (err) {
    console.log('err', err)
  }
}
