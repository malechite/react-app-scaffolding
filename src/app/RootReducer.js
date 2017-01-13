import { combineReducers } from 'redux';
import items from '../users/reducers/items';

const rootReducer = combineReducers({
    items
});

export default rootReducer;
