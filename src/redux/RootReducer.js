import { combineReducers } from 'redux';
import items from 'pages/users/reducers/items';

const rootReducer = combineReducers({
    items
});

export default rootReducer;
