import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import api from './middleware/api';

export default function createStore(initialState) {
    const func = (window.devToolsExtension ? window.devToolsExtension()(_createStore) : _createStore);
    const create = compose(applyMiddleware(thunk, api))(func);

    const reducer = require('./modules/reducer').default;
    const store = create(reducer);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./modules/reducer', () => {
            store.replaceReducer(require('./modules/reducer').default);
        });
    }

    return store;
}
