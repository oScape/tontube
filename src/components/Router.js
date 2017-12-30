import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Home from './Home';


const Router = ({
    store,
    history
}) => {
    return(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={Home}/>
                 </div>
            </ConnectedRouter>
        </Provider>
    )
}

export default Router
