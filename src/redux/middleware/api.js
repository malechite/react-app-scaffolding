import request from 'superagent';

const BASE_URL = 'http://localhost:3001/api/';

function callApi(type, endpoint, options) {
    let token = localStorage.getItem('jwt') || null;

    return request(type, BASE_URL + endpoint)
        .set({ 'Authorization': 'Bearer ' + token })
        .send(options)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res);
            }
            return res;
        });
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {
    const callAPI = action[CALL_API];

    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint, type, options, actions } = callAPI;
    next({ type: actions.request });
    return callApi(type, endpoint, options).then(
        response => {
            next({
                response:response.body,
                type: actions.success
            });
        },
        error => {
            if (error.status === 401) {
                localStorage.removeItem('jwt');
                next({
                    type: 'application/auth/LOGOUT_SUCCESS',
                    isFetching: false,
                    isAuthenticated: false
                });
            } else {
                next({
                    error: error.message || 'There was an error.',
                    type: actions.failure
                });
            }
        }
    );
};
