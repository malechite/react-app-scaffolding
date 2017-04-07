import 'Styles/style.scss';
import '@blueprintjs/core/dist/blueprint.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'redux/create';
import { FocusStyleManager } from '@blueprintjs/core';
import Routes from './routes.js';

FocusStyleManager.onlyShowFocusOnTabs();
const store = createStore();

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
