/*eslint no-console: 0 */
import request from 'superagent';

//User Actions
const LOGIN_REQUEST = 'application/auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'application/auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'application/auth/LOGIN_FAILURE';
const LOGOUT_REQUEST = 'application/auth/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'application/auth/LOGOUT_SUCCESS';

//Initial State
const initialState = {
    loading: false,
    isAuthenticated: localStorage.getItem('jwt') ? true : false
};

//Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                isAuthenticated: false,
                user: action.creds
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                isAuthenticated: false
            });
        default:
            return state;
    }
}

//Action Creators
export function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        creds
    };
}

export function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        id_token: user.id_token
    };
}

export function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        message
    };
}

export function requestLogout() {
    return {
        type: LOGOUT_REQUEST
    };
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS
    };
}

//Async actions
export function loginUser(creds) {
    return (dispatch) => {
        dispatch(requestLogin(creds));
        return request.post('http://localhost:3001/' + 'sessions/create')
            .send(creds)
            .end((err, res) => {
                //dispatch(setLoading(false));
                if (err) {
                    dispatch(loginError(res.message));
                } else {
                    dispatch(receiveLogin(res));
                    localStorage.setItem('jwt', res.body.id_token);
                }
            });
    };
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('jwt');
        dispatch(receiveLogout());
    };
}
