/*eslint no-console: 0 */
import request from 'superagent';
import config from 'config';

//User Actions
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

//Initial State
const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
};

//Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
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

export function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    };
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    };
}

//Async actions
export function loginUser(creds) {
    console.log('loginUser', creds);
    return (dispatch) => {
        dispatch(requestLogin(creds));
        return request.post(config.api.base_url + 'sessions/create')
            .send(creds)
            .end((err, res) => {
                //dispatch(setLoading(false));
                if (err) {
                    dispatch(loginError(res.message));
                } else {
                    dispatch(receiveLogin(res));
                    console.log(res);
                    localStorage.setItem('id_token', res.body.id_token);
                }
            });
    };
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        dispatch(receiveLogout());
    };
}
