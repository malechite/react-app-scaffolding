import {ADD_ITEM, DELETE_ITEM, EDIT_ITEM} from '../constants/ActionTypes';

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

export default function todos(state = initialState, action) {
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
