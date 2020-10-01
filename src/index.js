import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './app';


// Redux
import { Provider } from 'react-redux';
import store from './store';

import 'normalize.css/normalize.css'
import './styles/styles.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
