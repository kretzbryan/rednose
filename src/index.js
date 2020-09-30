import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './app';
import Landing from './pages/Landing';
import Home from './pages/Home';
import ProfileDetail from './pages/ProfileDetail';
import Browse from './pages/Browse';

import 'normalize.css/normalize.css'
import './styles/styles.scss';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
