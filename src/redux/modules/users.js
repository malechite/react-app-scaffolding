
//User Actions
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const EDIT_ITEM = 'EDIT_ITEM';
const REQUEST_LIST = 'REQUEST_LIST';
const RECEIVE_LIST = 'RECEIVE_LIST';

//Initial State
const initialState = [
    {
        text: 'Foobar',
        id: 0
    },
    {
        text:'test',
        id:1
    }
];

//Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case ADD_ITEM:
        return [
            {
                id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
                completed: false,
                text: action.text
            },
            ...state
        ];

    case DELETE_ITEM:
        return state.filter(item =>
            item.id !== action.id
        );

    case EDIT_ITEM:
        return state.map(item =>
            item.id === action.id ?
            Object.assign({}, item, {text: action.text}) :
            item
        );

    default:
        return state;
    }
}

//Action Creators
export function addItem(item) {
    return { type: ADD_ITEM, item };
}

export function deleteItem(item) {
    return { type: DELETE_ITEM, item };
}

export function requestList() {
    return { type: REQUEST_LIST };
}

export function receiveList(item) {
    return { type: RECEIVE_LIST, item };
}

export function editItem(item) {
    return { type: EDIT_ITEM, item };
}
