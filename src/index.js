import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import Router from './components/Router';


const history = createHistory();

const middleware = routerMiddleware(history);

const Store = createStore(
    reducers,
    applyMiddleware(middleware, thunk, logger)
);


ReactDOM.render(
    <Router
        store={Store}
        history={history}
    />,
    document.getElementById('root')
);
