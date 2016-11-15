//import request from 'superagent';
import * as types from '../constants/ActionTypes';

//////////////////////////
////// User Actions //////
//////////////////////////

export function addItem(item) {
    return { type: types.ADD_ITEM, item };
}

export function deleteItem(item) {
    return { type: types.DELETE_ITEM, item };
}

export function requestList() {
    return { type: types.REQUEST_LIST };
}

export function receiveList(item) {
    return { type: types.RECEIVE_LIST, item };
}

export function editItem(item) {
    return { type: types.EDIT_ITEM, item };
}

//////////////////////////
////// Async Actions /////
//////////////////////////
