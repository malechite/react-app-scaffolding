import { api } from 'config';
import request from 'superagent';

function callApi(type, endpoint, options) {

    let token = localStorage.getItem('id_token') || null;

    return request(type, api.base_url + api.route + endpoint)
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
    const [ successAction, errorAction ] = actions;

    return callApi(type, endpoint, options).then(
        response =>
        next({
            response,
            type: successAction
        }),
        error => next({
            error: error.message || 'There was an error.',
            type: errorAction
        })
    );
};
