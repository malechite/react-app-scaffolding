/*eslint no-console: 0 */

//User Actions
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

//Initial State
const initialState = {
    isAuthenticated: localStorage.getItem('id_token') ? true : false
};

//Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
    // case ADD_ITEM:
    //
    // case DELETE_ITEM:
    //
    // case EDIT_ITEM:
    //
    default:
        return state;
    }
}

//Action Creators
export function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    };
}

export function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    };
}

export function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    };
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    };
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    };
}

//Async actions
export function loginUser(creds) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body: `username=${creds.username}&password=${creds.password}`
    };

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(creds));
        return fetch('http://localhost:3001/sessions/create', config)
        .then(response =>
        response.json().then(user => ({ user, response }))).then(({ user, response }) =>  {
            if (!response.ok) {
                // If there was a problem, we want to dispatch the error condition
                dispatch(loginError(user.message));
                return Promise.reject(user);
            } else {
                // If login was successful, set the token in local storage
                localStorage.setItem('id_token', user.id_token);
                // Dispatch the success action
                dispatch(receiveLogin(user));
            }
        }).catch(err => console.log('Error: ', err));
    };
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        dispatch(receiveLogout());
    };
}
