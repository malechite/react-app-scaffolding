import { CALL_API } from 'redux/middleware/api'

//User Actions
const ADD = 'application/users/ADD'
const DELETE = 'application/users/application/users/DELETE'
const EDIT = 'application/users/EDIT'
const SEARCH_REQUEST = 'application/users/SEARCH_REQUEST'
const SEARCH_RESPONSE = 'application/users/SEARCH_RESPONSE'
const SEARCH_FAILURE = 'application/users/SEARCH_FAILURE'

//Initial State
const initialState = {
  loading: false,
  list: [],
}

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case SEARCH_RESPONSE: {
      return {
        ...state,
        loading: false,
        list: action.response.results,
      }
    }
    default:
      return state
  }
}

export default reducer

//Action Creators
export const addUser = user => {
  return {
    type: ADD,
    user,
  }
}

export const deleteUser = user => {
  return {
    type: DELETE,
    user,
  }
}

export const editUser = user => {
  return {
    type: EDIT,
    user,
  }
}

//Async actions
export const getUsers = () => {
  return {
    [CALL_API]: {
      type: 'GET',
      endpoint: 'users',
      options: {},
      actions: {
        request: SEARCH_REQUEST,
        success: SEARCH_RESPONSE,
        failure: SEARCH_FAILURE,
      },
    },
  }
}
